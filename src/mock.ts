import nock from "nock";

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

export const mainViewServer = nock("https://conduit.productionready.io/api")
.defaultReplyHeaders({ "Access-Control-Allow-Origin": "*" })
.get("/articles?&limit=10&offset=0")
// TODO check why query parameter cannot work here
// .query({ limit: 10, offset: 10 })
.reply(200, { articles: fakeArticles, count: fakeArticles.length })
.get("/tags")
.reply(200,{tags:fakeTags})
