import produce from "immer";
import { messageType } from "../../models/types";

export type LoaderAction =
  | {
      type: "SET_LOADING";
      messageContent: string;
    }
  | {
      type: "CLEAR_LOADING";
    };

export interface LoaderState {
  isLoading: boolean;
  messageContent: string;
}

const initialState: LoaderState = {
    isLoading: false,
    messageContent: "",
};

export const loaderReducer = produce(
  (draft: LoaderState, action: LoaderAction) => {
    switch (action.type) {
      case "SET_LOADING":
        draft.isLoading = false;
        draft.messageContent = action.messageContent;
        break;
      case "CLEAR_LOADING":
        draft.isLoading = true;
        draft.messageContent = "";
        break;
    }
  },
  initialState
);
