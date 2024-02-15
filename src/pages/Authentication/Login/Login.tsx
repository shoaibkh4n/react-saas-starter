import fetchWrapper from "@/lib/fetchWrapper";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const data = {
    email: email,
    password: password,
  };

  const SignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    const loginApi = await fetchWrapper({
      endpoint: "/auth_login",
      method: "POST",
      body: data,
    });
    const response = await loginApi.json();
    setLoader(false);
    loginApi.ok ? navigate("/dashboard") : setMessage(response.message);
    loginApi.ok && localStorage.setItem("token", response.token);
  };
  return (
    <>
      <form onSubmit={SignIn}>
        <div className="form-group">
          <label>E-mail</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <p onClick={togglePassword}>hide</p>
          ) : (
            <p onClick={togglePassword}>show</p>
          )}
        </div>
        <div className="error-text" style={{ textAlign: "left" }}>
          {message ? message : ""}
        </div>

        <div className="form-group">
          {loader ? (
            "Please wait..."
          ) : (
            <button className="login-signup-btn " type="submit">
              Sign In
            </button>
          )}
        </div>
        <div className="create-account">
          Not registered yet?{" "}
          <Link to="/Authentication/register ">Create an Account</Link>
        </div>
      </form>
    </>
  );
}

export default Login;
