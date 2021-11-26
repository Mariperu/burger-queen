import React from "react";
import logo from "../assets/logoBQ.png";
import "./logo.css";

const Logo = (props) => {
  return (
    <>
      <section className="littleLogo">
        <img src={logo} alt="Logo" />
        <p>{props.userName}</p>
      </section>
    </>
  );
};

export { Logo };
