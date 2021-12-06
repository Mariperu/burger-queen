import React from "react";

const Input = ({ label, className, value, placeholder, name, onChange }) => {
  return (
    <>
      <h2>{label}</h2>
      <input
        required
        type="text"
        //   aria-label="input-form"
        // name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export { Input };
