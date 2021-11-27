import React from "react";

const OrderItem = ({
  quantity,
  product,
  newPrice,
  addItem,
  restItem,
  deleteItem,
}) => {
  return (
    <>
      <section className="orderItemContainer">
        <section className="descriptionOrderItem">
          <p>{quantity}</p>
        </section>
        <section className="descriptionOrderItem">
          <p>{product}</p>
        </section>
        <section className="descriptionOrderItem">
          <p>$ {newPrice}</p>
        </section>

        <section className="iconsOrderItem">
          <i onClick={addItem} className="fas fa-plus-circle"></i>
          <i onClick={restItem} className="fas fa-minus-circle"></i>
          <i onClick={deleteItem} className="fas fa-trash-alt"></i>
        </section>
      </section>
    </>
  );
};

export { OrderItem };
