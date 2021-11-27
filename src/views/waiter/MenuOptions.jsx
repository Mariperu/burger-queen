import React from "react";
import { Button } from "../../components/Button.jsx";
import "./menuOptions.css";

const MenuOptions = ({ breakfast, lunch, drinks }) => {
  return (
    <>
      <section className="menuContainer">
        <Button
          className={"btnMenuOption"}
          onClick={breakfast}
          text="Desayuno"
        />
        <Button className={"btnMenuOption"} onClick={lunch} text="De la casa" />
        <Button className={"btnMenuOption"} onClick={drinks} text="Bebidas" />
      </section>
    </>
  );
};

export { MenuOptions };
