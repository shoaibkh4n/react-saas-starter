import React, { useEffect, useState } from "react";
import LoginImg from "../../../Assets/Images/login-img.png";
import "./login.css";
import Loader from "../../../Components/Loader/Loader";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import OTP from "../../../Components/OTP/OTP";
import Logo from "../../../Assets/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [message, setMessage] = useState("");
  const [resend, setResend] = useState(false);
  const [resendMessage, setResendMessage] = useState("Resend Link");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  let passwordError = false;
  if (password.length < 6 && password.length != 0) {
    passwordError = true;
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const resendActivation = () => {
    setResendMessage("Please wait...");
    fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/resend_email/${email}?tenant=${
        window.location.hostname.split(".")[0]
      }`
    ).then((response) => {
      response.json().then((data) => {
        if (response.status === 200) {
          setResendMessage("Link sent successfully!!");
          setTimeout(() => {
            setResendMessage("Resend Link");
          }, 2000);
        } else {
          setResendMessage(data.message);
          setTimeout(() => {
            setResendMessage("Resend Link");
          }, 2000);
        }
      });
    });
  };

  const data = {
    email: email,
    password: password,
  };

  const SignIn = async (e) => {
    e.preventDefault();
    if (passwordError) return;
    setLoader(true);
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": true,
      },
      body: JSON.stringify(data),
    };
    const loginApi = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/login?tenant=${
        window.location.hostname.split(".")[0]
      }`,
      header
    );
    const response = await loginApi.json();
    setLoader(false);
    if (response.message === "Kindly activate your account before logging in") {
      setResend(true);
    }

    if (response.message == "Otp send on email") {
      setOtpModal(true);
    } else {
      loginApi.ok ? navigate("/dashboard") : setMessage(response.message);
      loginApi.ok && localStorage.setItem("token", response.token);
      loginApi.ok && localStorage.setItem("is_admin", response.is_admin);
    }
  };
  return (
    <div className="authentication">
      <div className="logo-update">
        <img src={Logo} alt="logo" />
        <hr />
      </div>
      <div className="left login-temp-sec">
        <div className="left-inner login-box-temp">
          <div className="sign-in-form">
            {/* <h1 className="sign-h1">Dive into ImmuneFile</h1> */}

            <div className="seperator">
              {/* <span>Do it via E-mail</span> */}
              <span>Secure with Varency Drive</span>
            </div>

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
              <div className="form-group" style={{ position: " relative" }}>
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={passwordError ? "error" : ""}
                  name="password"
                  placeholder="Password"
                  minLength="6"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <BsEyeSlashFill
                    className="showPassword"
                    onClick={togglePassword}
                  />
                ) : (
                  <BsEyeFill
                    className="showPassword"
                    onClick={togglePassword}
                  />
                )}
              </div>
              <div className="error-text" style={{ textAlign: "left" }}>
                {message ? message : ""}
              </div>
              {resend && (
                <div className="resend-message" onClick={resendActivation}>
                  {resendMessage}
                </div>
              )}

              <div
                className="form-group remember-forgot"
                style={{ textAlign: "right" }}
              >
                <Link
                  to="/Authentication/resetpassword"
                  className="forgot link-login"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="form-group">
                {loader ? (
                  <Loader size={50} />
                ) : (
                  <button className="login-signup-btn " type="submit">
                    Sign In
                  </button>
                )}
              </div>
              <div className="create-aacount">
                Not registered yet?{" "}
                <Link to="/Authentication/register " className="link-login">
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {otpModal ? <OTP open={otpModal} email={email} /> : ""}
    </div>
  );
}

export default Login;
