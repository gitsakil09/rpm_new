import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import CreatePreAlert from "./pages/CreatePreAlert";
import DetailsPreAlert from "./pages/DetailsPreAlert";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import OrderSuccess from "./pages/OrderSuccess";
import OrderUnsuccessful from "./pages/OrderUnsuccessful";
import Pay from "./pages/Pay";
import PaymentInformation from "./pages/PaymentInformation";
import PaymentReview from "./pages/PaymentReview";
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
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/payment-information" element={<PaymentInformation />} />
          <Route path="/payment-review" element={<PaymentReview />} />
          <Route path="/Order-success" element={<OrderSuccess />} />
          <Route path="/order-unsuccessful" element={<OrderUnsuccessful />} />
          <Route path="/create-pre-alert" element={<CreatePreAlert />} />
          <Route path="/details-pre-alert" element={<DetailsPreAlert />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
