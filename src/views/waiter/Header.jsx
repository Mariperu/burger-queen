import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo.jsx";
import "./header.css";

const Header = () => {
  return (
    <>
      <section className="headerContainer">
        <Link to="/mesero" className="link">
          <Logo userName={"Mesero"} style={{ textDecoration: "none" }} />
        </Link>
        <section className="headerNav">
          <a href="/">
            <i className="fas fa-home"></i>Inicio
          </a>

          <a href="/usuarios">
            <i className="fas fa-user-friends"></i>Usuarios
          </a>

          <a href="/ready">
            <i className="fas fa-user-friends"></i>Pedidos listos
          </a>
        </section>
      </section>
    </>
  );
};

export { Header };
