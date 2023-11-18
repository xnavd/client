import React from "react";

const CustomInput = (prorps) => {
    const {type, name,placeholder,classname} = prorps
  return (
    <div>
      <input
        type={type}
        name={name}
        className={`form-control $ {classname}`}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default CustomInput;
