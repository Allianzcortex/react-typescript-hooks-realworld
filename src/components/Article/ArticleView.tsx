import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, TextArea } from "semantic-ui-react";
import { useArticleService, useProfileService } from "../../hooks";
import { IArticle } from "../../models/types";
import { FavoriteButton } from "../Home/FavoriteButton";
import { FollowButton } from "../Home/FollowButton";
import {Comment} from "./Comment"

import "./style.css";

interface routeProps {
  slug: string;
}

export const ArticleView = () => {
  let { slug } = useParams<routeProps>();
  const articleService = useArticleService();

  const [loading, setLoading] = useState<boolean>(false);
  const [singleArticle, setSingleArticle] = useState<IArticle>();
  const [following, setFollowing] = useState<boolean>();

  const [username, setUsername] = useState<string>();

 
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
      
      <Comment slug={slug} />
    </div>
  );
};
