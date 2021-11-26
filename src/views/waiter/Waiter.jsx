import React, { useState } from "react";
import { Header } from "./Header.jsx";
import { MenuOptions } from "./MenuOptions.jsx";

import { useData } from "../../utils/useData.jsx";

const Waiter = () => {
  //Data de firebase
  const { docs } = useData("menu");

  const [menu, setMenu] = useState("Desayuno");

  return (
    <>
      <Header />

      <MenuOptions
        breakfast={() => setMenu("Desayuno")}
        lunch={() => setMenu("De la casa")}
        drinks={() => setMenu("Bebidas")}
      />
      <section>
        {docs
          .filter((m) => m.type.includes(menu))
          .map((item, index) => console.log(item, index, "CONSOLEANDO"))}
      </section>
      <div></div>
    </>
  );
};

export { Waiter };
