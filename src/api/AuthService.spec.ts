import { User } from "../models/User";
import { ApiService } from "./ApiService";
import { AuthService } from "./AuthService";
import { Method, Status } from "./http";

jest.setTimeout(100000);

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  describe("register", () => {
    it("can not register successfully", async () => {
      let res = await authService.register("aa", "aa@.com", "aa");
      expect(res.status).toBe(Status.UnprocessEntity);
      expect(res.data.errors.password).toStrictEqual(["can't be blank"]);
    });
  });
});
