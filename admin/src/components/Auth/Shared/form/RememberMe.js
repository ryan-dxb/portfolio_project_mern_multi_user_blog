import React from "react";

const RememberMe = () => {
  return (
    <div className="flex items-center mt-2 p-0">
      <div>
        <label className="label cursor-pointer">
          <input type="checkbox" checked className="checkbox" />
          <span className="label-text text-sm pl-2">Remember me</span>
        </label>
      </div>
    </div>
  );
};

export default RememberMe;
