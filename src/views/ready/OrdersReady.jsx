import React from "react";
import { Header } from "../waiter/Header.jsx";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useResult } from "../../utils/useResult.jsx";
import { Button } from "../../components/Button.jsx";
import { SmallDevice } from "../../utils/SmallDevice.jsx";
import "./ordersReady.css";

const OrdersReady = () => {
  const doneData = useResult("order", "done"); //Data de firebase //"done"
  const currentListReady = doneData;

  const stateAsDelivered = (id) => {
    //updateDoc: para actualizar campos de un doc sin reemplazarlo por completo
    const ref = doc(db, "order", id);
    updateDoc(ref, {
      state: "delivered",
      delivery_time: new Date().toLocaleString("es-PE"),
    });
    // .then(() => {
    //   console.log("estado pedido: entregado");
    //});
  };

  return (
    <>
      <Header />

      <h3 className="tittleOrdersToDeliver">Pedidos por entregar</h3>

      <section className="listReadyContainer">
        {currentListReady.map((order) => {
          return (
            <section className="itemReady" key={order.id}>
              <section>
                Cliente: {order.data.customer} - Mesa: {order.data.table}
              </section>

              <Button
                className="btnDelivery"
                text="Entregado"
                onClick={() => {
                  stateAsDelivered(order.id);
                }}
              />
            </section>
          );
        })}
      </section>

      <SmallDevice />
    </>
  );
};

export { OrdersReady };
