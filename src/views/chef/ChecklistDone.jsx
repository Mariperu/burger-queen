import React, { useContext } from "react";
import { SingleDoneOrder } from "../../context/SingleDoneOrder.jsx";
import "./check.css";

const ChecklistDone = () => {
  const singleDoneOrder = useContext(SingleDoneOrder);

  return (
    <>
      <section className="checklistContainer">
        {singleDoneOrder.data.order.map((product) => {
          return (
            <section
              className="singleChecklistDone"
              key={singleDoneOrder.id + "product" + product.key}
            >
              <section>{product.quantity}</section>
              <section>{product.product}</section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export { ChecklistDone };
