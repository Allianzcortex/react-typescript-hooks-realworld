import { User } from "../models/User";
import { setLocalStorage } from "../utils";
import { ApiService } from "./ApiService";

export class AuthService {
 
  api: ApiService<User>;

  constructor() {
    this.api = new ApiService<User>();
  }

  //   type

//   private handleUserResponse({ user: { token, ...user } }) {
//     setLocalStorage("token", <string>token);
    
//   }

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
    // .then((user) => {
    //   handleUserResponse(user.data);
    // });
  }

  public getCurrrent() {
    return this.api.get("user");
  }
}