import { IArticle } from "../models/types";
import { pageParameter, PER_PAGE_COUNT } from "../utils";
import { ApiService } from "./ApiService";

export class ArticleService {
  api: ApiService<IArticle>;

  constructor() {
    this.api = new ApiService<IArticle>();
  }

  public getArticles(page: number, tag?: string, favorited?: string) {
    let parameter = "";

    if (tag !== undefined) {
      parameter += `tag=${tag}`;
    }
    if (favorited !== undefined) {
      parameter += `&favorited=${favorited}`;
    }
    return this.api.get(
      `articles?${parameter}&${pageParameter(PER_PAGE_COUNT, page)}`
    );
  }

  public getSingleArticle(slug:string) {
    return this.api.get(`articles/${slug}`)
  }

  public favoriteArticle(slug:string) {
    return this.api.post(``)
  }

  public getTags() {
    return this.api.get("tags");
  }
}
