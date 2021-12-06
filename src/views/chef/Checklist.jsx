import React, { useContext, useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { SingleOrder } from "../../context/SingleOrder.jsx";
import "./check.css";

const Checklist = () => {
  const [singleOrder] = useContext(SingleOrder);
  const [check, setCheck] = useState(false);
  const [item, setItem] = useState();
  const [identifier, setIdentifier] = useState();

  useEffect(() => {
    if (
      item !== undefined &&
      check !== undefined &&
      identifier === singleOrder.id
    ) {
      singleOrder.data.order[item].readyChef = check;
      let updatedData = singleOrder.data;

      //setDoc: para crear o reemplazar un solo doc de firestore
      setDoc(doc(db, "order", identifier), updatedData);
    }
  });

  const getCurrentData = (boolean, value, id) => {
    setCheck(boolean);
    setItem(value);
    setIdentifier(id);
  };
  return (
    <>
      <section className="checklistContainer">
        {singleOrder.data.order.map((product) => {
          return (
            <section
              className="singleChecklist"
              key={singleOrder.id + "product" + product.key}
            >
              <section>
                <input
                  type="checkbox"
                  className="check"
                  checked={product.readyChef}
                  key={singleOrder.id + "productInput" + product.key}
                  onChange={(e) => {
                    getCurrentData(
                      e.target.checked,
                      singleOrder.data.order.indexOf(product),
                      singleOrder.id
                    );
                  }}
                />
              </section>
              <section>{product.quantity}</section>
              <section>{product.product}</section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export { Checklist };
