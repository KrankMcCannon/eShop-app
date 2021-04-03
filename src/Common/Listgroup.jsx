import React from "react";

const Listgroup = ({
  itemsCategory,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {itemsCategory.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Listgroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default Listgroup;
