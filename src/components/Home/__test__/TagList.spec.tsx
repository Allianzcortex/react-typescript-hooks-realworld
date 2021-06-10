import React, { Fragment } from "react";
import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import { MainView } from "../../MainView";
import nock from "nock";
import {
  initServices,
  IServices,
  ServicesContext,
} from "../../../models/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  it("render tagList successfully", async () => {

    const tags = ["aa", "bb", "cc"];
    const scope = nock("https://conduit.productionready.io/api")
      .defaultReplyHeaders({ "Access-Control-Allow-Origin": "*" })
      .get("/tags")
      .reply(200, { tags: tags });

    const { container, getByText } = renderResult();
    await waitFor(() => {
      tags.forEach((tag)=>{
        expect(getByText(tag)).toBeInTheDocument;
      })
      console.log(container.innerHTML);
    });
    // apparently only using getByText() without waitFor cannot work
    // await getByText("a")
  });
});
