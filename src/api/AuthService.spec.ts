import { User } from "../models/User";
import { ApiService } from "./ApiService";
import { AuthService } from "./AuthService";
import { Method, Status } from "./http";

jest.setTimeout(100000);

describe("AuthService", () => {
  let authService: AuthService;
  let token;
  beforeEach(() => {
    authService = new AuthService();
  });

  // describe("register", () => {
  //   it("can not register successfully", async () => {
  //     let res = await authService.register("aa", "aa@.com", "aa");
  //     expect(res.status).toBe(Status.UnprocessEntity);
  //     expect(res.data.errors.password).toStrictEqual(["can't be blank"]);
  //   });
  // });

  describe("login",()=>{

    it("can not login successfully",async ()=> {
      let res = await authService.login("aaaaaaaa@aaa.com", "wrongpassword");
      expect(res.status).toBe(Status.UnprocessEntity);
    })

      it("can login successfully",async ()=> {
        let res = await authService.login("aaaaaaaa@aaa.com", "aaaaaaaa");
        expect(res.status).toBe(Status.Ok);
        expect(res.data.user.email).toBe("aaaaaaaa@aaa.com")
        token = res.data.user.token
      })
  })

  describe("get current user",()=>{
    it("can get current user successfully",async ()=> {
      console.log("toke nis ---")
      console.log(token)
      
    })
  })

});
