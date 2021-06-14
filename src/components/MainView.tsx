import React, {
  Dispatch,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ArticleList } from "./Article/ArticleList";
import { TagList } from "./Home/TagList";

import "../index.css";
import { useArticleService } from "../hooks";
import { IArticle } from "../models/types";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { LoaderAction } from "../redux/reducers/LoaderReducer";
import { clearLoading, setLoading, setWarning } from "../redux/actions";
import { Tabs } from "./Home/Tabs";
import { NotificationAction } from "../redux/reducers/NotifyReducer";
import { useHistory } from "react-router-dom";
import "./style.css";

export const MainView = () => {
  const articleService = useArticleService();
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentTag, setCurrentTag] = useState<string | undefined>(undefined);
  const [isInitial, setInitial] = useState<boolean>(true);
  const notifyDispatch = useDispatch<Dispatch<NotificationAction>>();
  const history = useHistory();

  const { isAuthenticated } = useSelector((state: AppState) => state.auth);

  const { isLoading, messageContent } = useSelector(
    (state: AppState) => state.loader
  );
  const loaderDiapatch = useDispatch<Dispatch<LoaderAction>>();
  const TABS = {
    "global-feed": "Global Feed",
    feed: "Your Feed",
  };
  const [currentTab, setCurrentTab] = useState<string>("global-feed");

  const retrieveTag = async () => {
    const tagRes = await articleService.getTags();
    setTagList(tagRes.data.tags);
  };

  const retrieveArticle = async () => {
    if (!isAuthenticated && currentTab === "feed") {
      notifyDispatch(setWarning("You need to login firstly"));
      history.push("/login");
      return;
    }

    let articleRes;
    switch (currentTab) {
      case "global-feed":
        articleRes = await articleService.getArticles({
          page: currentPage,
          tag: currentTag,
        });
        break;
      case "feed":
        articleRes = await articleService.getFeed(currentPage);
        break;
    }

    setArticleList(articleRes.data.articles);
    setCount(articleRes.data.articlesCount);
  };

  const memorizedSetTag = useCallback(
    (_: SyntheticEvent, data: object) => {
      const newTag = "";
      if (newTag === currentTag) {
        // disable
        setCurrentTag(undefined);
      } else {
        setCurrentTag(newTag);
      }
    },
    [tagList]
  );

  useEffect(() => {
    const retrieve = async () => {
      loaderDiapatch(
        setLoading("fetch articles , tags , generating pagination")
      );
      await Promise.all([retrieveArticle(), retrieveTag()]);
      setInitial(false);
      loaderDiapatch(clearLoading());
    };
    retrieve();
  }, []);

  useEffect(() => {
    const retrieve = async () => {
      loaderDiapatch(setLoading("fetch articles , generating pagination"));
      await retrieveArticle();
      if (!isInitial) {
        loaderDiapatch(clearLoading());
      }
    };
    retrieve();
    window.scrollTo(0, 0);
  }, [currentPage, currentTag, currentTab]);

  return (
    <div className="main-container">
      <div className="article-container">
        <Tabs tabs={TABS} setCurrentTab={setCurrentTab} />
        <ArticleList
          articleList={articleList}
          count={count}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="tag-container">
        <TagList
          currentTag={currentTag}
          tags={tagList}
          tab={currentTab}
          setCurrentTag={setCurrentTag}
        />
      </div>
    </div>
  );
};
