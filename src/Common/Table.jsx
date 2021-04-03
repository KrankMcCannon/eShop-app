import React from "react";
import TableHeader from "../Common/TableHeader";
import TableBody from "../Common/TableBody";

const Table = ({ sortColumn, onSort, data, columns }) => {
  return (
    <table className="table table-hover">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
