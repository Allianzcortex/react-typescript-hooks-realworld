import { useContext } from "react";
import { AuthService } from "./api/AuthService";
import { ServicesContext } from "./models/Services";

export function useAuthService(): AuthService {
  const services = useContext(ServicesContext);
  if (!services.authService) {
    throw new Error("Auth Service is not initialized.");
  }

  return services.authService;
}
