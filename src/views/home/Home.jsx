import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoBQ.png";
import { Button } from "../../components/Button.jsx";
import { SmallDevice } from "../../utils/SmallDevice";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="homeContainer">
        <img src={logo} alt="logoBQ"></img>
        <Link to="/usuarios">
          <Button className={"btnInit"} text="Iniciar" />
        </Link>
      </section>

      <SmallDevice />
    </>
  );
};

export { Home };
