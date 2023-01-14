import React from "react";
import {Routes,BrowserRouter,Route} from "react-router-dom";
import Dashboard from "./core/Dashboard";
import Signup from "./core/Signup";
import Signin from "./core/Signin";

const  App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
          <Route path="/dashboard" element = {<Dashboard />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/signin" element = {<Signin />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
