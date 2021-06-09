import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useArticleService, useProfileService } from "../../hooks";
import { IArticle } from "../../models/types";
import { FavoriteButton } from "../Home/FavoriteButton";
import { FollowButton } from "../Home/FollowButton";

interface routeProps {
  slug: string;
}

export const ArticleView = () => {
  let { slug } = useParams<routeProps>();
  const articleService = useArticleService();

  const [loading, setLoading] = useState<boolean>(false);
  const [singleArticle, setSingleArticle] = useState<IArticle>();
  const [following, setFollowing] = useState<boolean>();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [favoriteCount,setFavoriteCount] = useState<number>(0);
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    const retrieveSingleArticle = async () => {
      setLoading(false);
      const singleArticleRes = await articleService.getSingleArticle(slug);
      const article = singleArticleRes.data.article
      setSingleArticle(article);
      setUsername(article.author.username);
      setFollowing(article.author.following);
      setFavorite(article.favorited)
      setFavoriteCount(article.favoritesCount)
    console.log(singleArticleRes.data)
      setLoading(true);
    };
    retrieveSingleArticle();
  }, []);

  useEffect(() => {
    console.log(singleArticle);
  }, [singleArticle]);

 
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
          <FollowButton following={following!} setFollowing={setFollowing} username={username!}  />
        <FavoriteButton favorite={favorite!} setFavorite={setFavorite} favoriteCount={favoriteCount} />
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
};
