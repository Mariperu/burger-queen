import React, { useState } from "react";
import { Modal } from "../../utils/Modal.jsx";
import { Button } from "../../components/Button.jsx";
import { CancelWarning } from "./CancelWarning.jsx";
import "./description.css";

const BtnCancel = () => {
  const [open, setOpen] = useState(false); //Modal

  return (
    <>
      <Button
        className="btnCancelChef"
        text="Cancelar"
        onClick={() => {
          setOpen(true);
        }}
      />

      <Modal open={open} close={() => setOpen(false)}>
        <CancelWarning />
      </Modal>
    </>
  );
};

export { BtnCancel };
