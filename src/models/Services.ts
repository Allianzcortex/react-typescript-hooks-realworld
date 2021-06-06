import { createContext } from "react";
import { AuthService } from "../api/AuthService";

export interface IServices {
    authService?:AuthService;
}

export const ServicesContext = createContext<IServices>({})

export function initServices() {
  return {
    authService: new AuthService()
  }
}