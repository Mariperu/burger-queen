import React, { useState } from "react";
import { Input } from "../../components/Input.jsx";

const Order = () => {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  return (
    <>
      <section className="orderContainer">
        <h2 className="titleOrder">Orden</h2>

        <section className="menu-inputs">
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
      </section>
    </>
  );
};

export { Order };
