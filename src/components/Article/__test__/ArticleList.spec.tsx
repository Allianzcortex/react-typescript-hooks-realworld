import React, { Fragment } from "react";
import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import nock from "nock";
import {
  initServices,
  IServices,
  ServicesContext,
} from "../../../models/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainView } from "../../MainView";
import { fakeArticles, mainViewServer } from "../../../mock";

describe("test", () => {
  let services: IServices;

  beforeEach(() => {
    services = initServices();
  });

  const renderResult: () => RenderResult = () => {
    return render(
      <Router>
        <ServicesContext.Provider value={services}>
          <Fragment>
            <Switch>
              <Route path="/" exact>
                <MainView />
              </Route>
            </Switch>
          </Fragment>
        </ServicesContext.Provider>
      </Router>
    );
  };

  it("render Article List successfully", async () => {
    const scope = mainViewServer;
    const { container, getByText } = renderResult();
    await waitFor(() => {
      fakeArticles.forEach((article) => {
        expect(getByText(article.title)).toBeInTheDocument;
      });
      console.log(container.innerHTML);
    });
  });
});
