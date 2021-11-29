import React, { useState } from "react";
import { useData } from "../../utils/useData.jsx";
import { Modal } from "../../utils/Modal.jsx";
import { IdGenerator } from "../../utils/IdGenerator.jsx";
import { Header } from "./Header.jsx";
import { MenuOptions } from "./MenuOptions.jsx";
import { Products } from "./Products.jsx";
import { Additional } from "./Additional.jsx";
import { Order } from "./Order.jsx";
import "./waiter.css";
import swal from "sweetalert";

const Waiter = () => {
  const { docs } = useData("menu"); //Data de firebase
  const [menu, setMenu] = useState("Desayuno"); //Menu options
  const [open, setOpen] = useState(false); //Modal
  const [hamburgerExtra, setHamburgerExtra] = useState(""); //Opciones y adicionales de hamburguesa
  const [orderDescription, setOrderDescription] = useState([]); //Descripción de cada orden

  //Adicionales de hamburgesa
  const addAdditional = (e) => {
    let key = hamburgerExtra.id + "-" + IdGenerator();
    //let key = "hbx-" + IdGenerator();
    let meatDefault = "res";
    let quantity = 1;
    let price = hamburgerExtra.price;
    let product = hamburgerExtra.product;

    //console.log(e.target);//show elems selec de modal
    //target.dataset extrae info de opciones selec en modal
    if (e.target.dataset.meattype !== "") {
      product += ", " + e.target.dataset.meattype;
    }
    if (!e.target.dataset.meattype) {
      product += ", " + meatDefault;
    }
    if (e.target.dataset.egg === "egg") {
      product += ", huevo";
      price++;
    }
    if (e.target.dataset.cheese === "cheese") {
      product += ", queso";
      price++;
    }
    //console.log(key, product, price, quantity);
    orderDescription.push({ key, product, price, quantity }); //Adicionando cada pedido en lista de orden
    setOpen(false); //Cerrando modal
  };

  //Tomando orden
  const addProductToOrder = (elem) => {
    //findIndex: devuelve índice de 1er elem de array que cumpla con condicional, sino devuelve -1
    const singleElem = orderDescription.findIndex((i) => i.key === elem.id);

    //opciones hamburguesa +extra
    if (elem.type === "De la casa" && elem.subtype !== "Acompañamiento") {
      setOpen(true); //console.log("Open modal");
      setHamburgerExtra(elem); //console.log(setHamburgerExtra(elem));

      //pedido diferente de hamburgusa
    } else if (singleElem === -1) {
      const key = elem.id;
      const price = elem.price;
      const product = elem.product;
      const quantity = 1;
      const readyChef = false;
      //console.log(key, product, price, quantity);
      orderDescription.push({ key, product, price, quantity, readyChef });
      setOrderDescription([...orderDescription]);
      //console.log(orderDescription);
    } else {
      let duplicateElem = orderDescription[singleElem];
      duplicateElem.quantity += 1;
      setOrderDescription([...orderDescription]);
      //console.log(orderDescription);
    }
  };

  const clearOrder = () => {
    setOrderDescription([]);
  };

  //Cancelar orden
  const showCancelAlert = () => {
    swal({
      title: "Cancelar",
      text: "¿Deseas cancelar el pedido?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((resp) => {
      if (resp) {
        swal({ text: "Pedido cancelado", icon: "success", timer: "1000" });
        setOrderDescription([]); //limpia array
      }
    });
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
            <Additional onClick={(e) => addAdditional(e)} />
          </Modal>
        </section>

        <section>
          <Order
            data-testid="order"
            orderDescription={orderDescription}
            reset={clearOrder}
            // onClick={() => {
            //   setOrderDescription([]); //limpiar orden, cancelar
            // }}
            onClick={
              () => showCancelAlert() //limpiar orden, cancelar
            }
          />
        </section>
      </section>
    </>
  );
};

export { Waiter };
