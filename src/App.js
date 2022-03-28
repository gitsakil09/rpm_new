import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import PreAlert from "./pages/PreAlert";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/pre-alert" element={<PreAlert />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
