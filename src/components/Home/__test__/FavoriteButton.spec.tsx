import React, { Fragment } from "react";
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import { MainView } from "../../MainView";
import {
  initServices,
  IServices,
  ServicesContext,
} from "../../../models/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fakeSingleArticle, mockArticleServer } from "../../../mock";
import { FavoriteButton } from "../FavoriteButton";
import { IArticle } from "../../../models/types";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../../redux/store";
import { AuthState } from "../../../redux/reducers/AuthReducer";

describe("test", () => {
  let services: IServices;
  let article: IArticle;
  let initialState: AuthState;

  beforeEach(() => {
    services = initServices();
    article = fakeSingleArticle as IArticle;
    initialState = {
      isAuthenticated: true,
      user: "test",
    };
  });

  const renderResult: () => RenderResult = () => {
    return render(
      <Router>
        <Provider store={createStore(rootReducer, { auth: initialState })}>
          <ServicesContext.Provider value={services}>
            <FavoriteButton iarticle={article} />
          </ServicesContext.Provider>
        </Provider>
      </Router>
    );
  };

  it("render FavoriteButton successfully", async () => {
    const scope = mockArticleServer;

    const { container, getByRole, getByText } = renderResult();
    await waitFor(() => {
      // The text is `Favorite&nbsp; (1)` and is splitting for multiple lines
      // for display result here, so use {exact: false}

      expect(getByText(`Favorite`, { exact: false })).toBeInTheDocument;
      expect(getByText(`${fakeSingleArticle.favoritesCount}`, { exact: false }))
        .toBeInTheDocument;
    });
  });

  it("render UnfavoriteButton successfully after clicking", async () => {
    const scope = mockArticleServer;

    const { container, getByRole, getByText } = renderResult();
    fireEvent.click(getByRole("button"));
    await waitFor(() => {
      expect(getByText(`Unfavorite`, { exact: false })).toBeInTheDocument;
      expect(
        getByText(`${fakeSingleArticle.favoritesCount + 1}`, { exact: false })
      ).toBeInTheDocument;
    });
  });
});
