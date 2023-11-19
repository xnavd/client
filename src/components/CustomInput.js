import React from "react";

const CustomInput = (prorps) => {
  const { type, name, placeholder, classname, value, onChange, onBlur } =
    prorps;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
    </div>
  );
};

export default CustomInput;
