import nock from "nock";
import { BASE_URL, Header, Status } from "./api/http";
import { IArticle } from "./models/types";

export const fakeTags = ["aa", "bb", "cc"];

export const fakeSingleArticle: IArticle = {
  title: "Test",
  slug: "test-xjula7",
  body: "Sth",
  createdAt: "2021-06-10T15:03:47.018Z",
  author: {
    username: "Emily Papadourou",
    bio: "",
    image: "",
    following: false,
  },
  description: "Test 1",
  favorited: false,
  favoritesCount: 1,
  tagList: ["aa"],
  updatedAt: "2021-06-10T15:03:47.018Z",
};

export const fakeArticles = [fakeSingleArticle];

const handleFavorite = (article: IArticle) => {
  const favorited = !article.favorited;
  const count = article.favoritesCount;
  const favoritesCount = article.favorited ? count - 1 : count + 1;

  return Object.assign({}, article, {
    favorited: favorited,
    favoritesCount: favoritesCount,
  });
};

export const mockArticleServer = nock(BASE_URL)
  .defaultReplyHeaders({ [Header.CORS]: "*" })
  // here we may want to use .query({ limit: 6, offset: 10 })
  .get("/articles?&limit=6&offset=0")
  .reply(Status.Ok, { articles: fakeArticles, count: fakeArticles.length })
  .get("/tags")
  .reply(Status.Ok, { tags: fakeTags })
  .post(`/articles/${fakeSingleArticle.slug}/favorite`)
  .reply(Status.Ok, { article: handleFavorite(fakeSingleArticle) })
  .delete(`/articles/${fakeSingleArticle.slug}/favorite`)
  .reply(Status.Ok, { article: handleFavorite(fakeSingleArticle) });
