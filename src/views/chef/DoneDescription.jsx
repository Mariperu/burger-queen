import React, { useContext } from "react";
import { SingleDoneOrder } from "../../context/SingleDoneOrder.jsx";
import { ChecklistDone } from "./ChecklistDone.jsx";
import "./description.css";

const DoneDescription = () => {
  const singleDoneOrder = useContext(SingleDoneOrder);

  return (
    <>
      <section className="doneDescription">
        <h2>Orden Lista</h2>
        <section className="infoDoneDescription">
          <p> Cliente: {singleDoneOrder.data.customer}</p>
          <p>Mesa: {singleDoneOrder.data.table}</p>
          <p>Ingreso: {singleDoneOrder.data.init_time} </p>
          <p>Salida: {singleDoneOrder.data.done_time} </p>
        </section>

        <section className="tittleDetailDoneDescription">
          <h3>Cant.</h3>
          <h3>Producto</h3>
        </section>

        <section>
          <ChecklistDone />
        </section>
      </section>
    </>
  );
};

export { DoneDescription };
