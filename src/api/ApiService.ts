import { Header, Type, Method, Status } from "./http";
import axios from "axios";

axios.defaults.baseURL = "https://conduit.productionready.io/api/";

// const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQ3MzEsInVzZXJuYW1lIjoiYWFhYWRkZGQiLCJleHAiOjE2Mjg0MzE5ODZ9.ZggNIOLlQlMy5MCjOvF0VPIuwMWkF_q_RsAKcOMIS3Q"
// axios.defaults.headers.common['Authorization'] = `Token ${token}`;

export class ApiService<T> {
  public async get(url:string,body?: object | FormData): Promise<any> {
    return this.send(Method.Get, url,body);
  }
  public async post(url:string,body?: object | FormData): Promise<any> {
    return this.send(Method.Post, url,body);
  }
  public async delete(url:string,body?: object | FormData): Promise<any> {
    return this.send(Method.Delete, url,body);
  }
  public async put(url:string,body?: object | FormData): Promise<any> {
    return this.send(Method.Put, url,body);
  }

  private async send(
    method: Method,
    url: string,
    body?: object | FormData
  ): Promise<any> {
    let requestBody;
    if (body) {
      if (body instanceof FormData) {
        requestBody = body;
      } else {
        // axios will stringfy json automaticaly so no need for it
        // headers.set(Header.ContentType, Type.JSON);
        // requestBody = JSON.stringify(body);
      }
    }

    const options = {
      method: method,
      data: body,
      url: url,
      // headers:headers,
    };

    let res;  
    await axios(options)
      .then((response) => {
        res = response;
      })
      .catch((error) => {
        // TODO continue, handle error response and redirect
        res = Promise.reject(error.response);
      })
    return res;
  }
}
