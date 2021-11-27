import React, { useState } from "react";
import { Button } from "../../components/Button.jsx";
import { Input } from "../../components/Input.jsx";

const Order = () => {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");

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

        <section className="customerOrder">Resumen viene de waiter</section>

        <section className="totalOrder">
          <h3>
            TOTAL: $<span>ejm 10</span>
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
