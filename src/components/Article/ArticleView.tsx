import React, { Dispatch, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Form, Icon, Popup, TextArea } from "semantic-ui-react";
import { useArticleService, useProfileService } from "../../hooks";
import { IArticle } from "../../models/types";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import {
  clearLoading,
  setError,
  setLoading,
  setSuccess,
} from "../../redux/actions";
import { AppState } from "../../redux/store";
import { FavoriteButton } from "../Home/FavoriteButton";
import { FollowButton } from "../Home/FollowButton";
import { Comment } from "./Comment";

import "./style.css";
import { LoaderAction } from "../../redux/reducers/LoaderReducer";
import { Avatar } from "../Home/Avatar";

interface routeProps {
  slug: string;
}

export const ArticleView = () => {
  let { slug } = useParams<routeProps>();
  const articleService = useArticleService();
  const history = useHistory();
  const { isLoading, messageContent } = useSelector(
    (state: AppState) => state.loader
  );
  const loaderDiapatch = useDispatch<Dispatch<LoaderAction>>();
  const notifyDiapatch = useDispatch<Dispatch<NotificationAction>>();
  const [singleArticle, setSingleArticle] = useState<IArticle>();
  const [username, setUsername] = useState<string>();

  const { isAuthenticated, user } = useSelector(
    (state: AppState) => state.auth
  );

  useEffect(() => {
    const retrieveSingleArticle = async () => {
      loaderDiapatch(setLoading("fetch article and comment"));

      const singleArticleRes = await articleService.getSingleArticle(slug);
      const article = singleArticleRes.data.article as IArticle;
      setSingleArticle(article);
      setUsername(article.author.username);

      loaderDiapatch(clearLoading());
    };
    retrieveSingleArticle();
  }, []);

  const handleDeleteArticle = async () => {
    try {
      await articleService.deleteArticle(slug);
      notifyDiapatch(setSuccess("Delete Article Successfully."));
      history.push("/");
    } catch (error) {
      notifyDiapatch(setError(error.data.errors));
    }
  };

  if (!isLoading || singleArticle === undefined) {
    return <Fragment></Fragment>;
  }
  return (
    <div className="articleview-container">
      <h2>{singleArticle.title}</h2>
      <Icon name="write" size="small" />
      <Avatar
        image={singleArticle.author.image!}
        username={singleArticle.author.username}
      />
      <hr/>
      <body>{singleArticle.body}</body>
      <Fragment>
        <br />
        <FollowButton profile={singleArticle?.author} />
        <FavoriteButton iarticle={singleArticle!} />
      </Fragment>
      <Link to={`/article/edit/${slug}`}>
        <Popup
          content="edit article"
          trigger={<Button size="tiny" color={"green"} icon="pencil" />}
        />
      </Link>
      <Popup
        content="delete article"
        trigger={
          <Button
            size="tiny"
            color={"grey"}
            icon="trash"
            onClick={handleDeleteArticle}
          />
        }
      />
      <Comment slug={slug} />
    </div>
  );
};
