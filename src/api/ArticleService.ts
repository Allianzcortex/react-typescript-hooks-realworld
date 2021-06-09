import { IArticle } from "../models/types";
import { pageParameter, PER_PAGE_COUNT } from "../utils";
import { ApiService } from "./ApiService";

export class ArticleService {
  api: ApiService<IArticle>;

  constructor() {
    this.api = new ApiService<IArticle>();
  }

  public getArticles(page: number) {
    return this.api.get(`articles?${pageParameter(PER_PAGE_COUNT, page)}`);
  }



}
