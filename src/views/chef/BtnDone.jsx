import React, { useContext } from "react";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { SingleOrder } from "../../context/SingleOrder.jsx";
import { Button } from "../../components/Button.jsx";
import "./description.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BtnDone = () => {
  const [singleOrder, setSingleOrder] = useContext(SingleOrder);
  //console.log("BTN DONE ", singleOrder.data.order);

  const statePrepared = (id) => {
    let readyOrdersArray = singleOrder.data.order.map(
      (product) => product.readyChef //inicia en falso
    );
    let readyVerification = readyOrdersArray.every((check) => check === true); //todos los checks marcados

    if (readyVerification) {
      //updateDoc: para actualizar campos de un doc sin reemplazarlo por completo
      const ref = doc(db, "order", id);
      updateDoc(ref, {
        state: "done",
        done_time: new Date().toLocaleString("es-PE"),
      }).then(() => {
        //console.log("estado pedido: preparado");
      });
      setSingleOrder();
    } else {
      //alert("Por favor completar la orden.");
      toast.warn("La orden no esta lista.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Button
        className="btnDoneChef"
        text="Listo"
        onClick={() => {
          statePrepared(singleOrder.id);
        }}
      />
      <ToastContainer />
    </>
  );
};

export { BtnDone };
