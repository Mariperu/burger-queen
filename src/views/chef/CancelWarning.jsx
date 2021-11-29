import React, { useContext } from "react";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { SingleOrder } from "../../context/SingleOrder.jsx";
import { Button } from "../../components/Button.jsx";

const CancelWarning = () => {
  const [singleOrder, setSingleOrder] = useContext(SingleOrder);

  //updateDoc: para actualizar campos de un doc sin reemplazarlo por completo
  const stateCanceled = (id) => {
    const ref = doc(db, "order", id);
    updateDoc(ref, {
      state: "canceled",
    }).then(() => {
      console.log("estado pedido: cancelado");
    });
    setSingleOrder();
  };

  return (
    <>
      <section className="CancelWarningContainer">
        <h3>Deseas de cancelar el pedido?</h3>

        <Button
          className="btnConfirm"
          text="Confirmar"
          onClick={() => {
            stateCanceled(singleOrder.id);
          }}
        />
      </section>
    </>
  );
};

export { CancelWarning };
