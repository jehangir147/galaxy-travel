import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Pricing from "./routes/Pricing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
