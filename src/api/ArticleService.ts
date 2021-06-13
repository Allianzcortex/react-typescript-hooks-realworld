import { IArticle, IArticleMeta } from "../models/types";
import { pageParameter, PER_PAGE_COUNT } from "../utils";
import { ApiService } from "./ApiService";
import _ from "lodash";

export class ArticleService {
  api: ApiService<IArticle>;

  constructor() {
    this.api = new ApiService<IArticle>();
  }

  public createArticle(article: IArticleMeta) {
    return this.api.post(`articles`, {
      article: {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      },
    });
  }

  public updateArticle(slug: string, article: object) {
    return this.api.put(`articles/${slug}`,article);
  }

  public deleteArticle(slug: string) {
    return this.api.delete(`articles/${slug}`);
  }

  public getArticles(paras:{page: number, tag?: string, 
    favorited?: string,author?: string}) {
    let parameter = "";
    
    if (paras.tag !== undefined) {
      parameter += `tag=${paras.tag}`;
    }
    if (paras.favorited !== undefined) {
      parameter += `&favorited=${paras.favorited}`;
    }
    if (paras.author !==undefined) {
      parameter += `&author=${paras.author}`;
    }
    return this.api.get(
      `articles?${parameter}&${pageParameter(PER_PAGE_COUNT,paras.page)}`
    );
  }

  public getFeed(page:number) {
    return this.api.get(`articles/feed?${pageParameter(PER_PAGE_COUNT, page)}`)
  }

  public getSingleArticle(slug: string) {
    return this.api.get(`articles/${slug}`);
  }

  public favoriteArticle(slug: string) {
    return this.api.post(`articles/${slug}/favorite`);
  }

  public unfavoriteArticle(slug: string) {
    return this.api.delete(`articles/${slug}/favorite`);
  }

  public getTags() {
    return this.api.get("tags");
  }
}
