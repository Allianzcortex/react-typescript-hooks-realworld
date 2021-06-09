import { IArticleMeta } from "./models/types";
import { objectDiff } from "./utils";

test("object diff", () => {
  const a1: IArticleMeta = {
    title: "title1",
    description: "description1",
    body: "body1",
    tags: ["aa", "bb", "cc"],
  };
  const a2: IArticleMeta = {
    title: "title1",
    description: "description",
    body: "body",
    tags: [],
  };
  expect(objectDiff(a1, a2)).toEqual({
    description: "description1",
    body: "body1",
    tags: ["aa", "bb", "cc"],
  });
});
