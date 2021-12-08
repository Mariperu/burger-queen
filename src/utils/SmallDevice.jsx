import React from "react";
import ReactDom from "react-dom";
import "./smallDevice.css";

const SmallDevice = () => {
  return ReactDom.createPortal(
    <>
      <section className="smallDeviceContainer">
        {/* <h1>
          <i className="fas fa-hamburger"></i>
        </h1> */}
        <h3>
          Para acceder a la aplicación utilice tablet, computadora o intente
          girando su dispositivo.
          <br></br>
          Gracias.
        </h3>
      </section>
    </>,
    document.getElementById("sd")
  );
};

export { SmallDevice };
