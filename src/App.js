import React from "react";
import {
  //BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { Home } from "./views/home/Home.jsx";
import { Users } from "./views/users/Users.jsx";
import { Waiter } from "./views/waiter/Waiter.jsx";
import { Chef } from "./views/chef/Chef.jsx";
import { OrdersReady } from "./views/ready/OrdersReady.jsx";
import { Error404 } from "./views/error/Error404.jsx";
import "./App.css";

function App() {
  return (
    <>
      {/* <Router> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/mesero" element={<Waiter />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/ready" element={<OrdersReady />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      {/* </Router> */}
    </>
  );
}

export default App;
