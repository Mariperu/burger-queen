import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo.jsx";
import { useResult } from "../../utils/useResult.jsx";
import "./header.css";

const Header = () => {
  const doneData = useResult("order", "done"); //Data de firebase //"done"
  const counterReady = doneData.length;
  //console.log(counterReady);

  return (
    <>
      <section className="headerContainer">
        <Link to="/mesero" className="link">
          <Logo userName={"Mesero"} />
        </Link>
        <section className="headerNav">
          <a href="/burger-queen/#">
            <i className="fas fa-home"></i>Inicio
          </a>

          <a href="/burger-queen/#/usuarios">
            <i className="fas fa-user-friends"></i>Usuarios
          </a>

          <a href="/burger-queen/#/ready" className="counterReady">
            <span> {counterReady} </span>Pedidos listos
          </a>
        </section>
      </section>
    </>
  );
};

export { Header };
