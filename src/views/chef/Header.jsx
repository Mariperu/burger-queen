import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo.jsx";

const Header = () => {
  return (
    <>
      <section>
        <Link to="/chef">
          <Logo userName={"Chef"} />
        </Link>

        <a href="/">
          <i className="fas fa-home"></i>Inicio
        </a>

        <a href="/usuarios">
          <i className="fas fa-user-friends"></i>Usuarios
        </a>
      </section>
    </>
  );
};

export { Header };
