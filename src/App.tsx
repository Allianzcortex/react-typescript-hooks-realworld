import React, { useState } from "react";
import Login from "./components/Auth/Login";
import { useConstructor } from "./hooks";
import { initServices,IServices, ServicesContext } from "./models/Services";

function App() {
  
  let services:IServices;

  useConstructor(()=>{
    services = initServices()
  })

  return (
    <ServicesContext.Provider value={services!}>
    <div className="App">
      <header className="App-header">
        <Login/>
      </header>
    </div>
    </ServicesContext.Provider>
  );
}

export default App;
