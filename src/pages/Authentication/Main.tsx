import React, { useEffect } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import Error from "../Error/Error";
import PublicRoutes from "../../Auth/PublicRoute";
import Activation from "./Activation/Activation";
import ResetPassword from "./ResetPassword/ResetPassword";

function Authentication() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/auth/tenant/verify_tenant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": true,
      },
      body: JSON.stringify({
        subdomain: window.location.hostname.split(".")[0],
      }),
    }).then((response) => {
      response.json().then((data) => {
        if (response.status != 200) {
          window.location.href = `${process.env.REACT_APP_VERIFY_TENANT_REDIRECT}`;
        }
      });
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ForgotPassword />} />
          <Route path="activation/:token" element={<Activation />} />
          <Route path="resetpassword/:token" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Authentication;
