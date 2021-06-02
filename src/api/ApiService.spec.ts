import { ApiService } from "./ApiService";
import { Method } from "./http";

describe("ApiService", () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService(window.fetch);
  });

  describe("get", () => {
    it("can resolve get request suuccessfully", async () => {
      await apiService
        .send(Method.Get, "http://worldtimeapi.org/api/timezone")
        .then((response) =>{console.log(response);} );
      // console.log(response)
      console.log("---fffffff")
    });
  });
});
