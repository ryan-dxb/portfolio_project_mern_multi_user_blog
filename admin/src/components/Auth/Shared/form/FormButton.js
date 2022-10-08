import React from "react";

const FormButton = ({ icon, buttonText }) => {
  return (
    <>
      <button className="btn mt-4">
        {icon && <div className="mr-2">{icon}</div>}
        <span className="text-xs md:text-sm">{buttonText}</span>
      </button>
    </>
  );
};

export default FormButton;
