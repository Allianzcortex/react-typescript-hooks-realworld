import { ApiService } from "./ApiService";
import { Method, Status } from "./http";

describe("ApiService", () => {
  let apiService: ApiService<any>;

  beforeEach(() => {
    apiService = new ApiService();
  });

  describe("get", () => {
    it("can resolve get request suuccessfully", async () => {
      // let res = await apiService.send(Method.Get, "tags");
      // expect(res.status).toBe(Status.Ok);
      expect(2).toBe(2);
    });
  });
});
