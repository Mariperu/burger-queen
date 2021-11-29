import React, { useState } from "react";
import { useResult } from "../../utils/useResult.jsx";
import { SingleOrder } from "../../context/SingleOrder.jsx";
import { PendingDescription } from "./PendingDescription.jsx";
import "./pending_done.css";

const Pending = () => {
  const pendingData = useResult("order", "pending"); //Data de firebase
  //console.log(pendingData);
  const [singleOrderData, setSingleOrderData] = useState();
  const [, setSelectedOrder] = useState();

  const currentActiveOrder = (orderData) => {
    setSingleOrderData(orderData);
    setSelectedOrder(orderData.id);
  };

  return (
    <>
      <section className="pendingContainer">
        <section className="pendingList">
          {pendingData.map((order) => (
            <button
              className="btnPendingItem"
              key={order.id}
              onClick={() => currentActiveOrder(order)}
            >
              <h3>Cliente: {order.data.customer}</h3>
              <h3>Mesa: {order.data.table}</h3>
            </button>
          ))}
        </section>

        <section className="pendingDescription">
          <SingleOrder.Provider value={[singleOrderData, setSingleOrderData]}>
            {singleOrderData === undefined ? (
              "Selecciona un pedido para ver el detalle."
            ) : (
              <PendingDescription />
            )}
          </SingleOrder.Provider>
        </section>
      </section>
    </>
  );
};

export { Pending };
