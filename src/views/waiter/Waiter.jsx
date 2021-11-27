import React, { useState } from "react";
import { useData } from "../../utils/useData.jsx";
import { Header } from "./Header.jsx";
import { MenuOptions } from "./MenuOptions.jsx";
import { Products } from "./Products.jsx";
import { Modal } from "../../utils/Modal.jsx";
import { Additional } from "./Additional.jsx";
import { Order } from "./Order.jsx";
import "./waiter.css";

const Waiter = () => {
  //Data de firebase
  const { docs } = useData("menu");

  //Menu options
  const [menu, setMenu] = useState("Desayuno");
  //Modal
  const [open, setOpen] = useState(false);

  const addProductToOrder = (elem) => {
    if (elem.type === "De la casa" && elem.subtype !== "Acompañamiento") {
      setOpen(true);
      console.log("Open modal");
    }
  };

  return (
    <>
      <Header />
      <section className="waiterContainer">
        <section>
          <MenuOptions
            breakfast={() => setMenu("Desayuno")}
            lunch={() => setMenu("De la casa")}
            drinks={() => setMenu("Bebidas")}
          />
          <section>
            {docs
              .filter((m) => m.type.includes(menu))
              .map((elem, index) => (
                <Products
                  onClick={() => {
                    addProductToOrder(elem);
                  }}
                  key={index}
                  img={elem.img}
                  product={elem.product}
                  price={elem.price}
                />
              ))}
          </section>

          <Modal open={open} close={() => setOpen(false)}>
            <Additional />
          </Modal>
        </section>

        <section>
          <Order />
        </section>
      </section>
    </>
  );
};

export { Waiter };
