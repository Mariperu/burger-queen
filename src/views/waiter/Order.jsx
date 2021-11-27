import React, { useState } from "react";
import { Button } from "../../components/Button.jsx";
import { Input } from "../../components/Input.jsx";
import { OrderItem } from "./OrderItem.jsx";

const Order = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const newOrder = props.orderDescription;

  const totalSum = newOrder.reduce(
    (accumulator, elem) => accumulator + elem.price * elem.quantity,
    0
  );

  return (
    <>
      <section className="orderContainer">
        <h2>Orden</h2>

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
                // addItem={(e) => addItemQuantity(elem)}
                // restItem={(e) => removeItemQuantity(elem)}
                // deleteItem={(e) => deleteItem(elem)}
              />
            );
          })}
        </section>

        <section className="totalOrder">
          <h3>
            TOTAL: $ <span>{totalSum}</span>
          </h3>
        </section>

        <section className="menu-order-btns">
          <Button
            onClick={console.log("click cancelar orden")}
            class="btnCancelOrder"
            label="Cancelar"
          />
          <Button
            data-testid="send-order"
            class="btnSendOrder"
            label="Enviar"
            onClick={console.log("click enviar orden")}
          />
        </section>
      </section>
    </>
  );
};

export { Order };
