import produce from "immer";
import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import _ from "lodash";
import { IArticleMeta } from "../../models/types";
import { useArticleService } from "../../hooks";
import { useHistory } from "react-router";

export const ArticleEditor = () => {
  const articleService = useArticleService();
  const history = useHistory();
  const [article, setArticle] = useState<IArticleMeta>({
    title: "",
    description: "",
    body: "",
    tags: [],
  });

  const handleCreateArticle = async () => {
    try {
      const res = await articleService.createArticle(article);
      history.push(`/article/${res.data.article.slug}`);
    } catch (error) {}
  };

  const handleUpdateField = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    switch (name) {
      case "tags":
        // setEmail(value);
        break;
      default:
        setArticle(
          produce(article, (draft) => {
            _.set(draft, name, value);
          })
        );
        break;
    }
  };

  useEffect(() => {
    console.log(article);
  }, [article]);

  return (
    <Fragment>
      <Form>
        <Form.Field width={6}>
          <label>Article Title</label>
          <input
            name="title"
            placeholder="Article Title"
            onChange={handleUpdateField}
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input
            name="description"
            placeholder="What's this article about?"
            onChange={handleUpdateField}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>
            <TextArea
              name="body"
              placeholder="Article Body"
              onChange={handleUpdateField}
            />
          </label>
        </Form.Field>
        <Button attached="right" color="green" onClick={handleCreateArticle}>
          Create Article
        </Button>
      </Form>
    </Fragment>
  );
};
