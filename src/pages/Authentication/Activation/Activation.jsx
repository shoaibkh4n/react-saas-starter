import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./activation.css";
import Logo from "../../../Assets/varency.png";

function Activation() {
  const [message, setMessage] = useState("Please Wait...");
  const { token } = useParams();
  useEffect(() => {
    return fetch(
      `${process.env.REACT_APP_BASE_URL}/auth/token/verify/${token}?tenant=${
        window.location.hostname.split(".")[0]
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, [token]);

  return (
    <>
      <section className="activation-main">
        <img src={Logo} alt="varency-drive" />
        <div className="activation-reset">{message}</div>
        <Link to="/Authentication/login">Login</Link>
      </section>
    </>
  );
}

export default Activation;
