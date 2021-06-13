import produce from "immer";
import React, { Dispatch, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { useArticleService } from "../../hooks";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { IArticle, IUser } from "../../models/types";
import { setWarning } from "../../redux/actions";
import { AppState } from "../../redux/store";
import { useHistory } from "react-router-dom";

interface IProps {
  iarticle: IArticle;
}

export const FavoriteButton = ({ iarticle }: IProps) => {
  const articleService = useArticleService();
  const history = useHistory();
  const notifyDispatch = useDispatch<Dispatch<NotificationAction>>();
  const [article, setArticle] = useState<IArticle>(iarticle);
  const { favorited, favoritesCount, slug } = article;
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);

  const handleFavorite = async () => {
    // TODO use anothe way to handle any
    // it's a little annoying here

    if (!isAuthenticated) {
      notifyDispatch(setWarning("You need to login firstly."));
      history.push("/login");
      return;
    }

    let res: any;
    try {
      if (favorited) {
        res = await articleService.unfavoriteArticle(slug);
      } else {
        res = await articleService.favoriteArticle(slug);
      }
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
