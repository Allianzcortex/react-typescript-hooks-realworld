import nock from "nock";
import { BASE_URL, Header, Status } from "./api/http";

export const fakeTags = ["aa", "bb", "cc"];

export const fakeArticles = [
  {
    title: "Test",
    slug: "test-xjula7",
    body: "Sth",
    createdAt: "2021-06-10T15:03:47.018Z",
    author: {
      username: "Emily Papadourou",
      bio: null,
      image: "",
      following: false,
    },
    description: "Test 1",
    favorited: false,
    favoritesCount: 1,
    tagList: [],
    updatedAt: "2021-06-10T15:03:47.018Z",
  },
];

export const mockArticleServer = nock(BASE_URL)
  .defaultReplyHeaders({ [Header.CORS]: "*" })
  // here we may want to use .query({ limit: 10, offset: 10 })
  .get("/articles?&limit=10&offset=0")
  .reply(Status.Ok, { articles: fakeArticles, count: fakeArticles.length })
  .get("/tags")
  .reply(Status.Ok, { tags: fakeTags });
