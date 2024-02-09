import React, { useState } from "react";
import "../Login/login.css";
import Loader from "../../../Components/Loader/Loader";
import Verification from "../../../Components/Verification/Verification";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/logo.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [returnStatus, setReturnStatus] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const forgotPassword = async (e) => {
    e.preventDefault();
    setLoader(true);
    const data = {
      email: email,
    };

    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const api = await fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/reset?tenant=${
        window.location.hostname.split(".")[0]
      }`,
      header
    );
    const forgotStatus = api.json();
    setLoader(false);
    {
      api.ok
        ? setOpenModal(true)
        : alert(
            "Server Error: ",
            forgotStatus.message,
            "HTTP Status: ",
            api.status
          );
    }
    setReturnStatus(forgotStatus.message);
  };
  return (
    <div className="authentication">
      <div className="logo-update">
        <img src={Logo} alt="logo" />
        <hr />
      </div>
      <div className="left login-temp-sec">
        <div className="left-inner forgot-box-temp">
          <div className="forgot-pass-form">
            <h1 className="sign-h1">Forgot Password?</h1>

            <form onSubmit={forgotPassword}>
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                {loader ? (
                  <Loader />
                ) : (
                  <button className="login-signup-btn" type="submit">
                    RESET PASSWORD
                  </button>
                )}
              </div>
              <div style={{ marginTop: "20px" }} className="create-aacount">
                Not have account ?{" "}
                <Link to={"/Authentication/register"}>Create account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {openModal ? (
        <Verification open={openModal}>
          <p>
            We have sent a Reset Password link to your mail, Check your
            registered email. <br /> Verify your email address:{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "black",
                wordBreak: "break-word",
              }}
            >
              {email}
            </span>
          </p>
          <Link
            to="/Authentication/login"
            style={{ textDecoration: "none" }}
            className="back-to-signin"
            onClick={() => setOpenModal(false)}
          >
            Back to signin
          </Link>
        </Verification>
      ) : null}
    </div>
  );
}

export default ForgotPassword;
