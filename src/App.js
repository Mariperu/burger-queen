import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./views/home/Home.jsx";
import { Users } from "./views/users/Users.jsx";
import { Waiter } from "./views/waiter/Waiter.jsx";
import { Chef } from "./views/chef/Chef.jsx";
import { Error404 } from "./views/error/Error404.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/chef" element={<Chef />} />
          <Route element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
