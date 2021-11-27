import React from "react";
import "./products.css";

const Products = ({ onClick, img, product, price }) => {
  return (
    <>
      <section onClick={onClick} className="productsContainer">
        <button className="productsMenu">
          <img src={img} alt={img}></img>
          <h3>{product}</h3>
          <h3>$ {price}</h3>
        </button>
      </section>
    </>
  );
};

export { Products };
