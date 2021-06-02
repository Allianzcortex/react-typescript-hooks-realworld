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
  // public async get(path: string, body?: object | FormData): Promise<Response> {}

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

    const options = {
      method: method,
      // data: requestBody,
      url: url,
    };
    // let res = await axios(options)
    let res
    await axios(options).then((response)=>{
      res = response
    }).catch((error)=>{})
    return res
    // TODO continue, handle error response and redirect
  }
}
