import React from "react";
import "./orderItem.css";

const OrderItem = ({
  quantity,
  product,
  newPrice,
  addQuantity,
  reduceQuantity,
  deleteItem,
}) => {
  return (
    <>
      <section className="orderItemContainer">
        <section className="descriptionOrderItem iconsQuantity">
          <i onClick={addQuantity} className="fas fa-plus-circle"></i>
          <p>{quantity}</p>
          <i onClick={reduceQuantity} className="fas fa-minus-circle"></i>
        </section>

        <section className="descriptionOrderItem">
          <p>{product}</p>
        </section>

        <section className="descriptionOrderItem">
          <p>$ {newPrice}</p>
        </section>

        <section className="iconDelete">
          <i onClick={deleteItem} className="fas fa-trash-alt"></i>
        </section>
      </section>
    </>
  );
};

export { OrderItem };
