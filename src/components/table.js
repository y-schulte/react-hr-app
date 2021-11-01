import React from "react";
import TableRow from "./tablerow";

const Table = (props) => {
  //let rows = [];

  const addedApplicants = props.data.map((data, index) => {
    return (
      <TableRow
        key={index}
        name={data.fullName}
        applicationDate={data.applicationDate}
        position={data.position}
        department={data.department}
        level={data.level}
        stage={data.stage}
      />
    );
  });

  //console.log(addedApplicants);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Application Date</th>
          <th>Position</th>
          <th>Department</th>
          <th>Level</th>
          <th>Stage</th>
        </tr>
      </thead>
      <tbody>{addedApplicants}</tbody>
    </table>
  );
};

export default Table;
