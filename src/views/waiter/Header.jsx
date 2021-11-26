import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo.jsx";

const Header = () => {
  return (
    <>
      <section>
        <Link to="/mesero">
          <Logo userName={"Mesero"} />
        </Link>

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
    </>
  );
};

export { Header };
