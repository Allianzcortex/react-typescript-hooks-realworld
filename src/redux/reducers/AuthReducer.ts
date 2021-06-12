import produce from "immer";

export type AuthAction =
  | {
      type: "LOGIN";
    }
  | {
      type: "LOGOUT";
    }
  | {
      type: "LOAD_USER";
      user: string;
    };

export interface AuthState {
  isAuthenticated: boolean;
  // no need to store whole user object , only username is enough
  user: string | undefined;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

export const authReducer = produce((draft: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      draft.isAuthenticated = true;
      break;
    case "LOGOUT":
      draft.isAuthenticated = false;
      break;
    case "LOAD_USER":
      draft.isAuthenticated = true;
      draft.user = action.user;
      break;
  }
}, initialState);
