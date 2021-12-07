import React from "react";

const Input = ({ label, className, value, placeholder, onChange }) => {
  return (
    <>
      <h2>{label}</h2>
      <input
        required
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export { Input };
