import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Popup, Image, Icon } from "semantic-ui-react";
import { useArticleService } from "../../hooks";
import { IArticle } from "../../models/types";
import { updateCreppyDefaultImage } from "../../utils";

interface IProps {
  article: IArticle;
}

// TODO need to add article link
export const ArticleCard = ({ article }: IProps) => {
  const history = useHistory();

  const gotoArticle = () => {
    history.push(`/article/${article.slug}`);
  };

  const gotoAuthor = () => {
    history.push(`/profile/${article.author.username}`);
  };

  return (
    <Fragment>
      <Card>
        <Card.Content>
          <Popup
            content={article.author.username}
            trigger={
              <Image
                floated="right"
                as="a"
                onClick={gotoAuthor}
                size="mini"
                src={updateCreppyDefaultImage(article.author.image!)}
              />
            }
          ></Popup>
          <Card.Header onClick={gotoArticle}>{article.title}</Card.Header>
          <Card.Meta onClick={gotoAuthor}>{article.author.username}</Card.Meta>
          <Card.Description onClick={gotoArticle}>
            {article.body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra onClick={gotoArticle}>
          <a>
            <Icon name="clock" />
            {/* Or to import a library to handle the date */}
            {new Date(article.updatedAt).toString().split('GMT')[0]}
          </a>
        </Card.Content>
      </Card>
    </Fragment>
  );
};
