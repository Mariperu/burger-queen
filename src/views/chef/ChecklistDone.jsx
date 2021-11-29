import React, { useContext } from "react";
import { SingleDoneOrder } from "../../context/SingleDoneOrder.jsx";

const ChecklistDone = () => {
  const singleDoneOrder = useContext(SingleDoneOrder);

  return (
    <>
      <section className="checklistDoneContainer">
        {singleDoneOrder.data.order.map((product) => {
          return (
            <section
              className="singleChecklistDone"
              key={singleDoneOrder.id + "product" + product.key}
            >
              <p>{product.quantity}</p>
              <p>{product.product}</p>
            </section>
          );
        })}
      </section>
    </>
  );
};

export { ChecklistDone };
