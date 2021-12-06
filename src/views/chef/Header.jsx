import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo.jsx";
import "../waiter/header.css";

const Header = () => {
  return (
    <>
      <section className="headerContainer">
        <Link to="/chef" className="link">
          <Logo userName={"Chef"} />
        </Link>

        <section className="headerNav">
          <a href="/burger-queen/#">
            <i className="fas fa-home"></i>Inicio
          </a>

          <a href="/burger-queen/#/usuarios">
            <i className="fas fa-user-friends"></i>Usuarios
          </a>
        </section>
      </section>
    </>
  );
};

export { Header };
