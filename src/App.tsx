import React, { Fragment, useState } from "react";
import { Provider as ReduxProvider} from "react-redux";
import Login from "./components/Auth/Login";
import {Notification} from './components/Home/Notification'
import { useConstructor } from "./hooks";
import { initServices,IServices, ServicesContext } from "./models/Services";
import { store } from "./redux/store/store";

function App() {
  
  let services:IServices;

  useConstructor(()=>{
    services = initServices()
  })

  return (
    <ReduxProvider store={store} >
    <ServicesContext.Provider value={services!}>
      <Fragment>
        <Notification type_='error' content='fuck' />
    <div className="App">
      <header className="App-header">
        <Login/>
      </header>
    </div>
    </Fragment>
    </ServicesContext.Provider>
    </ReduxProvider>
  );
}

export default App;
