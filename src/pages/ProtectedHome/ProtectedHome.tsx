// This ProtectedHome directory contains all the files that belong to Authentication. You can name the files whatever you want, I just named them a common way

import { Routes, Route } from "react-router-dom";
import Notfound from "@/pages/Errors/404";
import ProtectedRoutes from "@/auth/ProtectedRoute";
import Protected_Path1 from "@/pages/ProtectedHome/Protected_Path1/Protected_Path1";

function Home() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/protected_path1" element={<Protected_Path1 />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default Home;
