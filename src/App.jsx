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
        <Route path="freedom" element={<Freedom />}>
          <Route path="1" element={<Freedom1 />} />
          <Route path="2" element={<Freedom2 />} />
          <Route path="3" element={<Freedom3 />} />
          <Route path="4" element={<Freedom4 />} />
          <Route path="5" element={<Freedom5 />} />
          <Route path="6" element={<Freedom6 />} />
          <Route path="7" element={<Freedom7 />} />
          <Route path="8" element={<Freedom8 />} />
          <Route path="9" element={<Freedom9 />} />
          <Route path="10" element={<Freedom10 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
