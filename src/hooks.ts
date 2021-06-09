import { useContext, useRef } from "react";
import { ArticleService } from "./api/ArticleService";
import { AuthService } from "./api/AuthService";
import { ProfileService } from "./api/ProfileService";
import { ServicesContext } from "./models/Services";

export function useAuthService(): AuthService {
  const services = useContext(ServicesContext);
  if (!services.authService) {
    throw new Error("Auth Service is not initialized.");
  }

  return services.authService;
}

export function useArticleService(): ArticleService {
  const services = useContext(ServicesContext);
  if (!services.articleService) {
    throw new Error("Article Service is not initialized.");
  }

  return services.articleService;
}

export function useProfileService(): ProfileService {
  const services = useContext(ServicesContext);
  if (!services.profileService) {
    throw new Error("Profile Service is not initialized.");
  }

  return services.profileService;
}

export function useConstructor(callBack=()=>{}) {
  const hasBeenCalled = useRef(false)
  if(hasBeenCalled.current) {
    return
  }
  callBack();
  hasBeenCalled.current = true
}