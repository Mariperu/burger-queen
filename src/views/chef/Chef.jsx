import React, { useState } from "react";
import { Header } from "./Header.jsx";
import { Button } from "../../components/Button.jsx";
import { Pending } from "./Pending.jsx";
import { Done } from "./Done.jsx";
import "./chef.css";

const Chef = () => {
  const [component, setComponent] = useState("pending");

  const renderPending = () => {
    setComponent("pending");
  };

  const renderDone = () => {
    setComponent("done"); //"done"
  };

  return (
    <>
      <Header />

      <section className="chefOptionsContainer">
        <Button
          text="Pendientes"
          className="pendingOption"
          onClick={() => renderPending()}
        />

        <Button
          text="Listos"
          className="doneOption"
          onClick={() => renderDone()}
        />
      </section>

      {component === "pending" ? <Pending /> : <Done />}
    </>
  );
};

export { Chef };
