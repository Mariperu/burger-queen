import React, { useState } from "react";
import "./additional.css";

const Additional = ({ onClick }) => {
  const [meat, setMeat] = useState("");
  const [egg, setEgg] = useState("");
  const [cheese, setCheese] = useState("");

  return (
    <>
      <section className="additionalContainer">
        <h3>Opciones de Hamburguesa:</h3>

        <section className="additionalOptions">
          <input
            type="radio"
            name="options"
            value="meat"
            id="opt1-label"
            onChange={(e) => setMeat(e.target.value)}
          />
          <label htmlFor="opt1-label">Res</label>

          <input
            type="radio"
            name="options"
            value="chicken"
            id="opt2-label"
            onChange={(e) => setMeat(e.target.value)}
          />
          <label htmlFor="opt2-label">Pollo</label>

          <input
            type="radio"
            name="options"
            value="veggie"
            id="opt3-label"
            onChange={(e) => setMeat(e.target.value)}
          />
          <label htmlFor="opt3-label">Vegetariana</label>
        </section>

        <h3>Adicionales:</h3>
        <section className="additionalOptions">
          <input
            type="checkbox"
            name="extra-cheese"
            value="cheese"
            id="chk1-label"
            onChange={(e) => setCheese(e.target.value)}
          />
          <label htmlFor="chk1-label">Queso $ 1</label>

          <input
            type="checkbox"
            name="extra-egg"
            value="egg"
            id="chk2-label"
            onChange={(e) => setEgg(e.target.value)}
          />
          <label htmlFor="chk2-label">Huevo $ 1</label>
        </section>

        <button
          className="btnAdditional"
          data-meattype={meat}
          data-cheese={cheese}
          data-egg={egg}
          onClick={onClick}
        >
          Agregar
        </button>
      </section>
    </>
  );
};

export { Additional };
