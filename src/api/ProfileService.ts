import { IProfile } from "../models/types";
import { ApiService } from "./ApiService";

export class ProfileService {
  api: ApiService<IProfile>;

  constructor() {
    this.api = new ApiService<IProfile>();
  }

  public followUser(username: string) {
    return this.api.post(`profiles/${username}/follow`);
  }

  public unfollowUser(username: string) {
    return this.api.delete(`profiles/${username}/follow`);
  }

  public getUser(username: string) {
    return this.api.get(`profiles/${username}`);
  }
}
