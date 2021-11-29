import React from "react";
import { Button } from "../../components/Button.jsx";
import { Link } from "react-router-dom";
import "./error.css";

const Error404 = () => {
  return (
    <>
      <section className="error404Container">
        <img src="" alt="" />
        <h1>Error</h1>
        <h1>
          4<i class="fas fa-hamburger"></i>4
        </h1>
        <h3>Página no encontrada</h3>

        <Link to="/">
          <Button text="Ir a inicio" className="btnError404" />
        </Link>
      </section>
    </>
  );
};

export { Error404 };
