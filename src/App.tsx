import React, { Fragment } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Login from "./components/Auth/Login";
import { Notification } from "./components/Home/Notification";
import { useConstructor } from "./hooks";
import { initServices, IServices, ServicesContext } from "./models/Services";
import { store } from "./redux/store";

import "semantic-ui-css/semantic.min.css";
import { Header } from "./components/Home/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import { Footer } from "./components/Home/Footer";
import { MainView } from "./components/MainView";
import { ArticleView } from "./components/Article/ArticleView";
import { ArticleEditor } from "./components/Article/ArticleEditor";
import { SettingEditor } from "./components/Home/SettingEditor";
import { Loader } from "./components/Home/Loader";

function App() {
  let services: IServices;

  useConstructor(() => {
    services = initServices();
  });

  return (
    <Router>
      <ReduxProvider store={store}>
        <SnackbarProvider>
          <ServicesContext.Provider value={services!}>
            <Fragment>
              <Notification type_="error" content="fuck" />
              <div className="App">
                <header className="App-header">
                  <Header />
                  <Loader/>
                  <Switch>
                    <Route path="/" exact>
                      <MainView />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/article/edit/:slug?" exact>
                      <ArticleEditor />
                    </Route>
                    <Route path="/article/:slug" exact>
                      <ArticleView/>
                    </Route>
                    <Route path="/setting" exact>
                      <SettingEditor />
                    </Route>
                  </Switch>
                </header>
                <Footer />
              </div>
            </Fragment>
          </ServicesContext.Provider>
        </SnackbarProvider>
      </ReduxProvider>
    </Router>
  );
}

export default App;
