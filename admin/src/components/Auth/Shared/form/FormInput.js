import React from "react";

const FormInput = ({ label, name, placeholder, ...rest }) => {
  return (
    <>
      <label htmlFor={name} className="label">
        <span htmlFor={name}>{label}</span>
      </label>
      <input
        name={name}
        placeholder={placeholder}
        {...rest}
        className="input input-bordered"
      />
    </>
  );
};

export default FormInput;
