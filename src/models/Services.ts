import { createContext } from "react";
import { ArticleService } from "../api/ArticleService";
import { AuthService } from "../api/AuthService";

export interface IServices {
    authService?:AuthService;
    articleService?:ArticleService;
}

export const ServicesContext = createContext<IServices>({})

export function initServices() {
  return {
    authService: new AuthService(),
    articleService: new ArticleService()
  }
}