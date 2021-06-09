import { createContext } from "react";
import { ArticleService } from "../api/ArticleService";
import { AuthService } from "../api/AuthService";
import { CommentService } from "../api/CommentService";
import { ProfileService } from "../api/ProfileService";

export interface IServices {
    authService?:AuthService;
    articleService?:ArticleService;
    commentService?:CommentService;
    profileService?:ProfileService;
}

export const ServicesContext = createContext<IServices>({})

export function initServices() {
  return {
    authService: new AuthService(),
    articleService: new ArticleService(),
    commentService:new CommentService(),
    profileService:new ProfileService()
  }
}