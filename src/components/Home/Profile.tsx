import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Pagination } from "../Home/Pagination";
import { useArticleService, useProfileService } from "../../hooks";
import { IArticle, IProfile } from "../../models/types";
import { clearLoading, setLoading } from "../../redux/actions";
import { LoaderAction } from "../../redux/reducers/LoaderReducer";
import { AppState } from "../../redux/store";
import { Avatar } from "./Avatar";
import { FollowButton } from "./FollowButton";
import { Tabs } from "./Tabs";
import { FavoriteButton } from "./FavoriteButton";
import { ArticleCard } from "../Article/ArticleCard";

interface routeProps {
  username: string;
}

export const Profile = () => {
  const { username } = useParams<routeProps>();
  const profileService = useProfileService();
  const articleService = useArticleService();

  const [profile, setProfile] = useState<IProfile>();
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [currentTab, setCurrentTab] = useState<string>("posts");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articleCount, setArticleCount] = useState<number>(0);
  const loaderDiapatch = useDispatch<Dispatch<LoaderAction>>();

  const { isLoading } = useSelector((state: AppState) => state.loader);

  const TABS = {
    posts: "My Posts",
    "favorited-posts": "Favorited Posts",
  };

  const retrieveProfile = async () => {
    const res = await profileService.getUser(username);
    setProfile(res.data.profile);
  };

  const retrievePublishedArticle = async () => {
    return articleService.getArticles({
      page: currentPage,
      author: username,
    });
  };

  const retrieveFavoritedArticle = async () => {
    return articleService.getArticles({
      page: currentPage,
      favorited: username,
    });
  };

  const retrieveArticles = async () => {
    let res;
    switch (currentTab) {
      case "posts":
        res = await retrievePublishedArticle();
        break;
      case "favorited-posts":
        res = await retrieveFavoritedArticle();
        break;
    }
    setArticleList(res.data.articles);
    setArticleCount(res.data.articlesCount);
  };

  useEffect(() => {
    const loadAllData = async () => {
      loaderDiapatch(setLoading("fetch profile and related articles"));
      await Promise.all([retrieveProfile(), retrieveArticles()]);
      loaderDiapatch(clearLoading());
    };
    loadAllData();
  }, [currentPage, currentTab]);

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <div className="main-container">
      <div className="article-container">
        {!isLoading || profile === undefined ? (
          ""
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Avatar image={profile.image!} username={username} />
            <FollowButton profile={profile!} />
          </div>
        )}
        <Fragment>
          <div className="tab-container">
            <Tabs tabs={TABS} setCurrentTab={setCurrentTab} />
          </div>
          {articleList.map((article) => {
            return <ArticleCard key={article.slug} article={article} />;
          })}

          <Pagination
            count={articleCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Fragment>
        )
      </div>
    </div>
  );
};
