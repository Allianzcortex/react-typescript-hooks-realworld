import { IComment, IProfile } from "../models/types";
import { ApiService } from "./ApiService";

export class CommentService {
  api: ApiService<IComment>;

  constructor() {
    this.api = new ApiService<IComment>();
  }

  public sendComment(slug: string, body: string) {
    return this.api.post(`articles/${slug}/comments`, {
      comment: {
        body: body,
      },
    });
  }

  public getComments(slug: string) {
    return this.api.get(`articles/${slug}/comments`);
  }

  public deleteComment(slug: string, id: number) {
    return this.api.delete(`articles/${slug}/comments/${id}`);
  }
}
