import { Header, Type, Method, Status } from "./http";

// Fetch type define : https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node-fetch/index.d.ts#L214
type Fetch = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

export class ApiService {
  private fetch: Fetch;

  constructor(fetch: Fetch) {
    this.fetch = fetch;
  }

  public async get(path: string, params?: object): Promise<Response> {}

  public async send(method:Method,path: string, params?:object):Promise<Response> {
     const headers = new Headers();

     let requestBody;
     if(params) {
         headers.set(Header.ContentType,Type.JSON);
         requestBody = JSON.stringify(params);
     }
     
     // TODO continue, handle error response and redirect
  };
}
