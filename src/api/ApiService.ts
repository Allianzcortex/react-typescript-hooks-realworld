import { Header, Type, Method, Status } from "./http";
import axios from "axios";

// axios.defaults.baseURL = "https://conduit.productionready.io/api/";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // TODO add handler
  }
);

export class ApiService {
  public async get(path: string, body?: object | FormData): Promise<Response> {}

  public async send(
    method: Method,
    url: string,
    body?: object | FormData,
  ): Promise<any> {
    const headers = new Headers();
    let requestBody;
    if (body) {
      if (body instanceof FormData) {
        requestBody = body;
      } else {
        headers.set(Header.ContentType, Type.JSON);
        requestBody = JSON.stringify(body);
      }
    }

    console.log(method)
    console.log(url)

    const options = {
      method: 'get',
      url: 'http://webcode.me'
    };
    let res = await axios(options)
    console.log(res)
    console.log(res.data)
    // await axios(options)
    //   .then((response) => {
    //     console.log(response)
    //     console.log("---receive successfully")
    //     return response;
    //   })
    //   .catch((error) => {});

    // TODO continue, handle error response and redirect
  }
}
