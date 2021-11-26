import React from "react";

const Button = ({ className, text, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export { Button };
