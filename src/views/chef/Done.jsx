import React, { useState } from "react";
import { useResult } from "../../utils/useResult.jsx";
import { SingleDoneOrder } from "../../context/SingleDoneOrder.jsx";
import { DoneDescription } from "./DoneDescription.jsx";
import "./pending_done.css";

const Done = () => {
  const doneData = useResult("order", "done"); //Data de firebase //"done"
  //console.log(doneData);
  const [singleDoneOrderData, setSingleDoneOrderData] = useState();
  const [, setSelectedOrder] = useState();

  const currentDoneActiveOrder = (orderData) => {
    setSingleDoneOrderData(orderData);
    setSelectedOrder(orderData.id);
  };

  return (
    <>
      <section className="doneContainer">
        <section className="doneList">
          {doneData.map((order) => (
            <button
              className="btnDoneItem"
              key={order.id}
              onClick={() => currentDoneActiveOrder(order)}
            >
              <h3>Cliente: {order.data.customer}</h3>
              <h3>Mesa: {order.data.table}</h3>
            </button>
          ))}
        </section>

        <section className="doneDescription">
          <SingleDoneOrder.Provider value={singleDoneOrderData}>
            {singleDoneOrderData === undefined ? (
              "Selecciona un item para ver el detalle."
            ) : (
              <DoneDescription />
            )}
          </SingleDoneOrder.Provider>
        </section>
      </section>
    </>
  );
};

export { Done };
