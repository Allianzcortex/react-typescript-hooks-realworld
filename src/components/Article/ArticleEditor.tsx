import produce from "immer";
import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import { IArticleMeta } from "../../models/types";
import { useArticleService } from "../../hooks";
import { useHistory } from "react-router";
import _ from "lodash";
import { useParams } from "react-router-dom";
import { objectDiff } from "../../utils";

interface routeProps {
  slug: string;
}

export const ArticleEditor = () => {
  const { slug } = useParams<routeProps>();
  const articleService = useArticleService();
  const history = useHistory();
  const [article, setArticle] = useState<IArticleMeta>({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });
  const [oldArticle, setOldArticle] = useState<IArticleMeta>();

  const handleCreateArticle = async () => {
    try {
      let res;
      if (slug === undefined) {
        res = await articleService.createArticle(article);
      } else {
        // based on api we will only update with changed value, the tricky part here is
        // users may change the value back and forth, value remains unchanged finally. That's
        // why we use `objectDiff` method to find the difference, in real(?) practice we
        // choose to put with the whole body
        res = await articleService.updateArticle(
          slug,
          objectDiff(article, oldArticle!)
        );
      }
      history.push(`/article/${res.data.article.slug}`);
    } catch (error) {}
  };

  const handleUpdateField = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setArticle(
      produce(article, (draft) => {
        _.set(draft, name, name === "tagList" ? value.split(",") : value);
      })
    );
  };

  useEffect(() => {
    const retrieveSingleArticle = async () => {
      const res = await articleService.getSingleArticle(slug);
      const article: IArticleMeta = res.data.article as IArticleMeta;
      setOldArticle(article);
      setArticle(article);
    };

    if (slug !== undefined) {
      retrieveSingleArticle();
    }
  }, []);

  return (
    <div className="main-container">
    <div className="setting-container">
      <Form>
        <Form.Field width={6}>
          <label>Article Title</label>
          <input
            name="title"
            placeholder="Article Title"
            onChange={handleUpdateField}
            value={article.title}
            required
          />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input
            name="description"
            placeholder="What's this article about?"
            onChange={handleUpdateField}
            value={article.description}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Body</label>
          <TextArea
            name="body"
            placeholder="Article Body"
            onChange={handleUpdateField}
            style={{ minHeight: 280 }}
            value={article.body}
          />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <input
            disabled={slug !== undefined}
            name="tagList"
            placeholder="tags split with comma"
            onChange={handleUpdateField}
            value={(article.tagList.join(","))}
            required
          />
        </Form.Field>
        <Button attached="right" color="green" onClick={handleCreateArticle}>
          {slug === undefined ? "create" : "edit"} Article
        </Button>
      </Form>
    </div>
    </div>
  );
};
