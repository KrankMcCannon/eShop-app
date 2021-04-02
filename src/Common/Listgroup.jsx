import React from "react";

const Listgroup = ({ itemsCategory, onItemSelect, selectedItem }) => {
  return (
    <ul className="list-group">
      {itemsCategory.map((item) => (
        <li
          key={item.id}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Listgroup;
