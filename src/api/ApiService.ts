import { Header, Type, Method, Status, BASE_URL } from "./http";
import axios from "axios";
import { getLocalStorage } from "../utils";

axios.defaults.baseURL = BASE_URL;

export class ApiService<T> {
  public async get<T>(url: string, body?: object | FormData): Promise<any> {
    return this.send(Method.Get, url, body);
  }
  public async post<T>(url: string, body?: object | FormData): Promise<any> {
    return this.send(Method.Post, url, body);
  }
  public async delete<T>(url: string, body?: object | FormData): Promise<any> {
    return this.send(Method.Delete, url, body);
  }
  public async put<T>(url: string, body?: object | FormData): Promise<any> {
    return this.send(Method.Put, url, body);
  }

  private async send<T>(
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

    const token = getLocalStorage("token");
    if (token !== null) {
      axios.defaults.headers.common["Authorization"] = `Token ${getLocalStorage(
        "token"
      )}`;
    }

    let res;
    await axios(options)
      .then((response) => {
        res = response;
      })
      .catch((error) => {
        switch (error.response.status) {
          case Status.NotFound:
            // handle tricky resposne status in conduit API response
            window.location.href = "/NotFound";
        }
        res = Promise.reject(error.response);
      });
    return res;
  }
}
