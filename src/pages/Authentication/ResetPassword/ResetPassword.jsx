import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import Logo from "../../../Assets/logo.png";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [successfullyChanged, setSuccessfullyChanged] = useState(false);

  let passwordError = false;
  if (password.length < 6 && password.length != 0) {
    passwordError = true;
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (passwordError) return;

    setLoader(true);
    fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/reset_password/${token}?tenant=${
        window.location.hostname.split(".")[0]
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password }),
      }
    ).then((response) => {
      response.json().then((data) => {
        if (response.status === 200) {
          setSuccessfullyChanged(true);
          setLoader(false);
          setNewPassword("");
          setConfirmPassword("");
          setTimeout(() => {
            navigate("/Authentication/login");
          }, 3000);
        } else {
          setLoader(false);
          setMessage(data.message);
        }
      });
    });
  };

  return (
    <>
      <div className="authentication">
        <div className="logo-update">
          <img src={Logo} alt="logo" />
          <hr />
        </div>
        <div className="left login-temp-sec">
          <div className="left-inner ">
            <div className="forgot-pass-form">
              <h1 className="sign-h1">Reset Password</h1>

              <form onSubmit={resetPassword}>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={passwordError ? "error" : ""}
                    name="password"
                    placeholder="New password"
                    required
                    value={password}
                    minLength="6"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ position: " relative" }}>
                  <label>Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={password !== confirmPassword ? "error" : ""}
                    name="confirm-password"
                    placeholder="Confirm password"
                    required
                    value={confirmPassword}
                    minLength="6"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                <div
                  className="error-text form-group"
                  style={{ textAlign: "left" }}
                >
                  {password !== confirmPassword ? "Password do not match" : ""}
                </div>
                <div className="error-text" style={{ textAlign: "left" }}>
                  {message ? message : ""}
                </div>
                {/* <div className="error-text" style={{ textAlign: "left" }}>
                  {message ? message : ""}
                </div> */}
                {successfullyChanged ? (
                  <>
                    <div className="form-group">
                      <button className="login-signup-btn success-btn">
                        Password changed Successfully🎉
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="form-group">
                    {loader ? (
                      <Loader />
                    ) : (
                      <button className="login-signup-btn " type="submit">
                        RESET PASSWORD
                      </button>
                    )}
                  </div>
                )}

                {successfullyChanged ? (
                  <p> Redirecting... </p>
                ) : (
                  <div style={{ marginTop: "20px" }} className="create-aacount">
                    Remembered the password? &nbsp;
                    <Link to={"/Authentication/login"}>Login</Link>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
