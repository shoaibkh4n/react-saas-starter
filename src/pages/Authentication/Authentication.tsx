// All the unprotected routes that requires to check whether user is logged in or not will go in this file.

import Login from "@/pages/Authentication/Login/Login";
import { Routes, Route } from "react-router-dom";
import Notfound from "@/pages/Errors/404";
import PublicRoutes from "@/auth/PublicRoute";

function Authentication() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="login" element={<Login />} />
          {/* You can create more authentication components like Login.  */}

          {/* <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ForgotPassword />} />
          <Route path="activation/:token" element={<Activation />} />
          <Route path="resetpassword/:token" element={<ResetPassword />} /> */}
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default Authentication;
