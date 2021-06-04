import { Article } from "../models/Article";
import { ApiService } from "./ApiService";

export class ArticleService {
  api: ApiService<Article>;

  constructor() {
    this.api = new ApiService<Article>();
  }

  public getArticles(page: number) {
    return this.api.get(`articles/`);
  }


}
