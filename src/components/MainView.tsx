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
import { clearLoading, setLoading } from "../redux/actions";

export const MainView = () => {
  const articleService = useArticleService();
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentTag, setCurrentTag] = useState<string | undefined>(undefined);
  const { isLoading, messageContent } = useSelector(
    (state: AppState) => state.loader
  );
  const loaderDiapatch = useDispatch<Dispatch<LoaderAction>>();

  useEffect(() => {
    const retrieveTag = async () => {
      loaderDiapatch(setLoading("fetch tags"));

      const tagRes = await articleService.getTags();
      setTagList(tagRes.data.tags);

      loaderDiapatch(clearLoading());
    };
    retrieveTag();
  }, []);

  const memorizedSetTag = useCallback(
    (event: SyntheticEvent, data: object) => {
      console.log((data as any).children);
      setCurrentTag((data as any).children);
    },
    [tagList]
  );

  useEffect(() => {
    const retrieveArticle = async () => {
      loaderDiapatch(setLoading("fetch articles , generating pagination"));

      const articleRes = await articleService.getArticles(
        currentPage,
        currentTag
      );
      setArticleList(articleRes.data.articles);
      setCount(articleRes.data.articlesCount);

      loaderDiapatch(clearLoading());
    };
    retrieveArticle();
  }, [currentPage, currentTag]);

  return (
    <div className="main-container">
      <div className="article-container">
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
          setCurretTag={memorizedSetTag}
        />
      </div>
    </div>
  );
};
