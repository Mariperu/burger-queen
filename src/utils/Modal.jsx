import React from "react";
import ReactDom from "react-dom";
import "./modal.css";

const Modal = ({ children, open, close }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <section className="screenCover" />

      <section className="modalContainer">
        <i className="closeModal fas fa-times-circle" onClick={close}></i>
        {children}
      </section>
    </>,
    document.getElementById("modalRoot")
  );
};

export { Modal };
