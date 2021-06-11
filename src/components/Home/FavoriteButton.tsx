import produce from "immer";
import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { useArticleService } from "../../hooks";
import { IArticle, IUser } from "../../models/types";

interface IProps {
  iarticle: IArticle;
}

export const FavoriteButton = ({ iarticle }: IProps) => {
  const articleService = useArticleService();
  const [article, setArticle] = useState<IArticle>(iarticle);
  const { favorited, favoritesCount, slug } = article;

  const handleFavorite = async () => {
    // TODO use anothe way to handle any
    // it's a little annoying here
    let res: any;
    try {
      if (favorited) {
        res = await articleService.unfavoriteArticle(slug);
      } else {
        res = await articleService.favoriteArticle(slug);
      }
      console.log(res.data);
      const article = res.data.article as IArticle;
      setArticle(
        produce(article, (draft) => {
          draft.favorited = article.favorited;
          draft.favoritesCount = article.favoritesCount;
        })
      );
    } catch (error) {
      // TODO handle error diapatch
    }
  };

  return (
    <Fragment>
      <Button size="tiny" icon onClick={handleFavorite}>
        <Icon name={favorited ? "heart outline" : "heart"} />
        {favorited ? "Unfavorite" : "Favorite"}&nbsp; ({favoritesCount})
      </Button>
    </Fragment>
  );
};
