import "./App.css";
import Authentication from "@/pages/Authentication/Authentication";
import ProtectedHome from "@/pages/ProtectedHome/ProtectedHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Neutral from "@/pages/Neutral/Neutral";
import { Link } from "react-router-dom";
import Notfound from "./pages/Errors/404";

function App() {
  return (
    <>
      <Router>
        <header>
          <Link to="/"> Home </Link>
          <Link to="/protectedhome/protected_path1"> Protected Home </Link>
          <Link to="/Authentication/login"> Login </Link>
        </header>

        <Routes>
          {/* All the unprotected pages that require authentication check */}
          <Route path="/Authentication/*" element={<Authentication />}></Route>

          {/* All the protected pages that require authentication check */}
          <Route path="/protectedhome/*" element={<ProtectedHome />}></Route>
          <Route path="*" element={<Notfound />} />

          <Route path="/" element={<Neutral />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
