import React, { useState } from "react";
import { Button } from "../../components/Button.jsx";
import { Input } from "../../components/Input.jsx";
import { OrderItem } from "./OrderItem.jsx";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "./order.css";

const Order = ({ orderDescription, reset, onClick }) => {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [, setCurrentOrder] = useState([]);

  const newOrder = orderDescription;

  //Suma total
  const totalSum = newOrder.reduce(
    (accumulator, elem) => accumulator + elem.price * elem.quantity,
    0
  );

  //Adicionar mismo item
  const addQuantity = (elem) => {
    elem.quantity = elem.quantity + 1;
    setCurrentOrder({ ...newOrder });
    //console.log(newOrder);
  };

  //restar
  const reduceQuantity = (elem) => {
    //console.log(newOrder.indexOf(elem));
    if (elem.quantity === 1) {
      newOrder.splice(newOrder.indexOf(elem), 1); //splice: (nro posic, cant elem a elim desde esa posic)
      setCurrentOrder([...newOrder]);
    } else {
      elem.quantity = elem.quantity - 1;
      setCurrentOrder({ ...newOrder });
    }
  };

  //eliminar item
  const deleteItem = (item) => {
    newOrder.splice(newOrder.indexOf(item), 1); //splice: (nro posic, cant elem a elim desde esa posic)
    setCurrentOrder([...newOrder]);
  };

  //console.log("NUEVA ORDEN", newOrder);

  //Subir nueva orden a Firebase con id generado por firestore
  const sendNewOrder = async (e) => {
    e.preventDefault();
    if (!customerName || !tableNumber) {
      alert("Por favor ingresa nombre de cliente y número de mesa");
    } else if (newOrder.length === 0) {
      alert("Orden vacía");
    } else {
      await addDoc(collection(db, "order"), {
        init_time: new Date().toLocaleString("es-PE"),
        customer: customerName,
        table: tableNumber,
        order: newOrder,
        total: "$ " + totalSum,
        state: "pending",
      }).then(() => {
        //para limpiar campos
        setCustomerName("");
        setTableNumber("");
        setCurrentOrder(reset);
      });
    }
  };

  return (
    <>
      <section className="orderContainer">
        <h2 className="tittleOrder">Orden</h2>

        <section className="orderInputs">
          <Input
            label="Cliente:"
            className="customer"
            placeholder="Escribe nombre del cliente"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <Input
            label="Mesa:"
            className="table"
            placeholder="Número"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          />
        </section>

        <section className="orderTittleItem">
          <h4>Cant.</h4>
          <h4>Producto</h4>
          <h4>Precio</h4>
        </section>

        <section className="customerOrder">
          {newOrder.map((elem, index) => {
            return (
              <OrderItem
                key={index}
                quantity={elem.quantity}
                product={elem.product}
                newPrice={elem.quantity * elem.price}
                addQuantity={() => addQuantity(elem)}
                reduceQuantity={() => reduceQuantity(elem)}
                deleteItem={() => deleteItem(elem)}
              />
            );
          })}
        </section>

        <section className="totalSum">
          <h3>
            TOTAL: $ <span>{totalSum}</span>
          </h3>
        </section>

        <section className="btnOrder">
          <Button
            onClick={onClick}
            className="btnCancelOrder"
            text="Cancelar"
          />
          <Button
            data-testid="send-order"
            className="btnSendOrder"
            text="Enviar"
            onClick={sendNewOrder}
          />
        </section>
      </section>
    </>
  );
};

export { Order };
