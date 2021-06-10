import React, { Dispatch, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Form, Popup, TextArea } from "semantic-ui-react";
import { useArticleService, useProfileService } from "../../hooks";
import { IArticle } from "../../models/types";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { setError, setSuccess } from "../../redux/actions";
import { AppState } from "../../redux/store";
import { FavoriteButton } from "../Home/FavoriteButton";
import { FollowButton } from "../Home/FollowButton";
import { Comment } from "./Comment";

import "./style.css";

interface routeProps {
  slug: string;
}

export const ArticleView = () => {
  let { slug } = useParams<routeProps>();
  const articleService = useArticleService();
  const history = useHistory();
  const notifyDiapatch = useDispatch<Dispatch<NotificationAction>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [singleArticle, setSingleArticle] = useState<IArticle>();
  const [following, setFollowing] = useState<boolean>();
  const [username, setUsername] = useState<string>();

  const { isAuthenticated, user } = useSelector(
    (state: AppState) => state.auth
  );

  useEffect(() => {
    const retrieveSingleArticle = async () => {
      setLoading(false);
      const singleArticleRes = await articleService.getSingleArticle(slug);
      const article = singleArticleRes.data.article;
      setSingleArticle(article);
      setUsername(article.author.username);
      setFollowing(article.author.following);
      console.log(article);
      setLoading(true);
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

  return (
    <div>
      single article {slug}
      {loading ? (
        <Fragment>
          {" "}
          <br />
          created by {username}
          <br />
          body : {singleArticle?.body}
          <FollowButton
            following={following!}
            setFollowing={setFollowing}
            username={username!}
          />
          <FavoriteButton iarticle={singleArticle!} />
        </Fragment>
      ) : (
        ""
      )}
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
