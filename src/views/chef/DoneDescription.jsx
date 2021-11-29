import React, { useContext } from "react";
import { SingleDoneOrder } from "../../context/SingleDoneOrder.jsx";
import { ChecklistDone } from "./ChecklistDone.jsx";

const DoneDescription = () => {
  const singleDoneOrder = useContext(SingleDoneOrder);

  return (
    <>
      <section>
        <h2>Orden Lista</h2>
        <section>
          <p> Cliente: {singleDoneOrder.data.customer}</p>
          <p>Mesa: {singleDoneOrder.data.table}</p>
          <p>Ingreso: {singleDoneOrder.data.init_time} </p>
          <p>Salida: {singleDoneOrder.data.done_time} </p>
        </section>

        <section>
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
