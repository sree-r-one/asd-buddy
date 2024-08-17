import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import { Home } from "./Pages";
import {
  Freedom,
  Freedom1,
  Freedom2,
  Freedom3,
  Freedom4,
  Freedom5,
  Freedom6,
  Freedom7,
  Freedom8,
  Freedom9,
  Freedom10,
} from "./Pages/freedom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="freedom" element={<Freedom />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
