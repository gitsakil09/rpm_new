import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import CreatePreAlert from "./pages/CreatePreAlert";
import DetailsPreAlert from "./pages/DetailsPreAlert";
import Home from "./pages/Home";
import DeliveryHistory from "./pages/Home/DeliveryHistory";
import DetainedPackages from "./pages/Home/DetainedPackages";
import ReadyForCollection from "./pages/Home/ReadyForCollection";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import OrderSuccess from "./pages/OrderSuccess";
import OrderUnsuccessful from "./pages/OrderUnsuccessful";
import Pay from "./pages/Pay";
import PaymentInformation from "./pages/PaymentInformation";
import PaymentReview from "./pages/PaymentReview";
import PreAlert from "./pages/PreAlert";
import SignUp from "./pages/SignUp";
import SteepFour from "./pages/SignUp/SteepFour";
import SteepThree from "./pages/SignUp/SteepThree";
import SteepTwo from "./pages/SignUp/SteepTwo";
import TerritoryListing from "./pages/TerritoryListing";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create-new-account" element={<SignUp />} />
            <Route
              path="/create-new-account-steep-two"
              element={<SteepTwo />}
            />
            <Route
              path="/create-new-account-steep-three"
              element={<SteepThree />}
            />
            <Route
              path="/create-new-account-steep-four"
              element={<SteepFour />}
            />
            <Route path="/" element={<Home />} />
            <Route
              path="/ready-for-collection"
              element={<ReadyForCollection />}
            />
            <Route path="/delivery-history" element={<DeliveryHistory />} />
            <Route path="/detained-packages" element={<DetainedPackages />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/pre-alert" element={<PreAlert />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/territory-listing" element={<TerritoryListing />} />
            <Route
              path="/payment-information"
              element={<PaymentInformation />}
            />
            <Route path="/payment-review" element={<PaymentReview />} />
            <Route path="/Order-success" element={<OrderSuccess />} />
            <Route path="/order-unsuccessful" element={<OrderUnsuccessful />} />
            <Route path="/create-pre-alert" element={<CreatePreAlert />} />
            <Route path="/details-pre-alert" element={<DetailsPreAlert />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
