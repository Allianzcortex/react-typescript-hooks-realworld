import React, { Fragment } from "react";
import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import { MainView } from "../../MainView";
import '@testing-library/jest-dom/extend-expect'
import {
  initServices,
  IServices,
  ServicesContext,
} from "../../../models/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fakeTags, mockArticleServer } from "../../../mock";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../../redux/store";

describe("test", () => {
  let services: IServices;

  beforeEach(() => {
    services = initServices();
  });

  const renderResult: () => RenderResult = () => {
    return render(
      <Router>
         <Provider store={createStore(rootReducer)}>
        <ServicesContext.Provider value={services}>
          <Fragment>
            <Switch>
              <Route path="/" exact>
                <MainView />
              </Route>
            </Switch>
          </Fragment>
        </ServicesContext.Provider>
        </Provider>
      </Router>
    );
  };

  it("render tagList successfully", async () => {

    const scope = mockArticleServer

    const { container, getByText } = renderResult();
    await waitFor(() => {
      fakeTags.forEach((tag)=>{
        expect(getByText(tag)).toBeInTheDocument;
      })
    });
    // apparently only using getByText() without waitFor cannot work
    // await getByText("a")
  });
});
