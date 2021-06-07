import produce from "immer";
import { IUser } from "../../models/types";

export type AuthAction =
  | {
      type: "LOGIN";
    }
  | {
      type: "LOGOUT";
    }
  | {
      type: "LOAD_USER";
      user: IUser;
    };

export interface AuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
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
      draft.user = action.user;
      break;
  }
}, initialState);

// export function authReducer(state:AuthState,action:AuthAction):AuthState {
//     switch (action.type) {
//         case 'LOGIN':

//     }
// }
