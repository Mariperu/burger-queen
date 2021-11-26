import React from "react";
import { Button } from "../../components/Button.jsx";

const MenuOptions = ({ breakfast, lunch, drinks }) => {
  return (
    <>
      <section>
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
