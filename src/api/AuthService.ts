import { User } from "../models/User";
import { ApiService } from "./ApiService";

export class AuthService {
    api: ApiService<User>;

  constructor() {
    this.api = new ApiService<User>();
  }

  public register(username:string,email:string,password:string) {
      const data = {
          "user": {
              "username":username,
              "email":email,
              "password":password
          }
      }

      return this.api.post("users",data)
  }

//   public login()

}