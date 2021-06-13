import React, { Fragment } from "react";
import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import {
  initServices,
  IServices,
  ServicesContext,
} from "../../../models/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainView } from "../../MainView";
import { fakeArticles, mockArticleServer } from "../../../mock";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../../redux/store";

describe("test", () => {
  let services: IServices;

  beforeEach(() => {
    services = initServices();
    window.scrollTo = jest.fn();
  });

  const renderResult: () => RenderResult = () => {
    return render(
      <Router>
        <ServicesContext.Provider value={services}>
          <Provider store={createStore(rootReducer)}>
            <Fragment>
              <Switch>
                <Route path="/" exact>
                  <MainView />
                </Route>
              </Switch>
            </Fragment>
          </Provider>
        </ServicesContext.Provider>
      </Router>
    );
  };

  it("render Article List successfully", async () => {
    const scope = mockArticleServer;
    const { container, getByText } = renderResult();
    await waitFor(() => {
      fakeArticles.forEach((article) => {
        expect(getByText(article.title)).toBeInTheDocument;
      });
    });
  });
});
