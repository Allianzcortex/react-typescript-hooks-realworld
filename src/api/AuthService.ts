import { IUser } from "../models/types";
import { setLocalStorage } from "../utils";
import { ApiService } from "./ApiService";

export class AuthService {
 
  api: ApiService<IUser>;

  constructor() {
    this.api = new ApiService<IUser>();
  }

  private handleUserResponse(user:IUser) {
    setLocalStorage("token", user.token);

  }

  // TODO define return type
  public register(username: string, email: string, password: string) {
    const data = {
      user: {
        username: username,
        email: email,
        password: password,
      },
    };

    return this.api.post("users", data);
  }

  public login(email: string, password: string) {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
    return this.api.post("users/login", data)
    .then((res) => {
      // TODO use json.parse() to deserialzie
      this.handleUserResponse(res.data.user);
      return res.data.user;
    });
  }

  public getCurrrentUser() {
    return this.api.get("user");
  }

  public updateUser(user:object) {
    return this.api.put('user',{"user":user})
  }

}
