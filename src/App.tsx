import React, { useState } from "react";
import { Provider as ReducProvider} from "react-redux";
import Login from "./components/Auth/Login";
import { useConstructor } from "./hooks";
import { initServices,IServices, ServicesContext } from "./models/Services";
import { store } from "./redux/store/store";

function App() {
  
  let services:IServices;

  useConstructor(()=>{
    services = initServices()
  })

  return (
    <ReducProvider store={store}>
    <ServicesContext.Provider value={services!}>
    <div className="App">
      <header className="App-header">
        <Login/>
      </header>
    </div>
    </ServicesContext.Provider>
    </Provider>
  );
}

export default App;
