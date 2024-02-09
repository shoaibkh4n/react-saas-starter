import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("token");

  if (user) {
    const expTime = JSON.parse(atob(user.split(".")[1])).exp;
    if (Date.now() / 1000 <= expTime) {
      return true;
    }
  } else {
    localStorage.clear();
    return false;
  }
};

const PublicRoutes = () => {
  const auth = useAuth();

  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
