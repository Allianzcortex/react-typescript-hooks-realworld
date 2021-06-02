import { Header, Type, Method, Status } from "./http";

// Fetch type define : https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node-fetch/index.d.ts#L214
type Fetch = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

export class ApiService {
  private fetch: Fetch;

  constructor(fetch: Fetch) {
    this.fetch = fetch;
  }

  public async get(path: string, body?: object | FormData): Promise<Response> {}

  public async send(
    method: Method,
    path: string,
    body?: object | FormData
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

    const init:RequestInit = {
      method:method,
      headers:headers,
      body:requestBody,
    }

    let res:Promise<Response>

    try {
      await this.fetch(path,init).then(
        response=>{return response.json()}
      )
      
    } catch(exception) {
      // TODO handle exception later
    }

    // TODO continue, handle error response and redirect
  }
}
