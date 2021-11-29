import React, { useContext } from "react";
import { SingleOrder } from "../../context/SingleOrder.jsx";
import { Checklist } from "./Checklist.jsx";
import { BtnCancel } from "./BtnCancel.jsx";
import { BtnDone } from "./BtnDone.jsx";

const PendingDescription = () => {
  const [singleOrder] = useContext(SingleOrder);
  return (
    <>
      <section>
        <h2>Orden Pendiente</h2>
        <section>
          <p> Cliente: {singleOrder.data.customer}</p>
          <p>Mesa: {singleOrder.data.table}</p>
          <p>Ingreso: {singleOrder.data.init_time} </p>
        </section>

        <section>
          <h3>Listo</h3>
          <h3>Cant.</h3>
          <h3>Producto</h3>
        </section>

        <section>
          <Checklist />
        </section>

        <section className="btnChefOrder">
          <BtnCancel />
          <BtnDone />
        </section>
      </section>
    </>
  );
};

export { PendingDescription };
