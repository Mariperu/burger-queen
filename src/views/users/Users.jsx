import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button.jsx";
import { Logo } from "../../components/Logo.jsx";
import { SmallDevice } from "../../utils/SmallDevice.jsx";
import mesero from "../../assets/mesero.png";
import chef from "../../assets/chef.png";
import "./users.css";

const Users = () => {
  return (
    <>
      <section>
        <Link to="/">
          <Logo userName={""} />
        </Link>

        <section className="usersContainer">
          <section>
            <img src={mesero} alt="Mesero"></img>
            <Link to="/mesero">
              <Button className={"btnWaiter"} text="Mesero" />
            </Link>
          </section>

          <section>
            <img src={chef} alt="Chef"></img>
            <Link to="/chef">
              <Button className={"btnChef"} text="Chef" />
            </Link>
          </section>
        </section>
      </section>

      <SmallDevice />
    </>
  );
};

export { Users };
