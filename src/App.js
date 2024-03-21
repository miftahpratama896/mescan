import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardCenter from "./Components/Dashboard/DashboardCenter";
import Machine1 from "./Components/Machine1/Machine1";
import Machine2 from "./Components/Machine2/Machine2";
import Machine3 from "./Components/Machine3/Machine3";
import Machine4 from "./Components/Machine4/Machine4";
import Machine5 from "./Components/Machine5/Machine5";
import Machine8 from "./Components/Machine8/Machine8";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/Machine1" element={<Machine1 />} />
        <Route path="/Machine2" element={<Machine2 />} />
        <Route path="/Machine3" element={<Machine3 />} />
        <Route path="/Machine4" element={<Machine4 />} />
        <Route path="/Machine5" element={<Machine5 />} />
        <Route path="/Machine8" element={<Machine8 />} />
      </Routes>
    </Router>
  );
}

export default App;
