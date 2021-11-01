import React from "react";

const TableRow = (props) => {
  return (
    <tr key={props.key}>
      <td>{props.name}</td>
      <td>{props.applicationDate}</td>
      <td>{props.position}</td>
      <td>{props.department}</td>
      <td>{props.level}</td>
      <td>{props.stage}</td>
    </tr>
  );
};

export default TableRow;
