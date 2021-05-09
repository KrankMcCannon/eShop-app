import React from "react";

const Dropdown = ({ name, label, error, options, ...rest }) => {
  return (
    <div>
      <div htmlFor={name}>{label}</div>
      <select {...rest} id={name} name={name} className="custom-select">
        <option value=""></option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
