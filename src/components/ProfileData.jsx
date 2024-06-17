import React from "react";
/**
 * Renders information about the user obtained from MS Graph 
 * @param props
 */
export const ProfileData = (props) => {
  return (
    // props.graphData.value[0].fields.id
 
    <table className="table">
      
      <thead>
      <tr> 
        <th>ID</th>
        <th>Name</th>
        <th>DOB</th>
        <th>Phone No</th>
      </tr>
      </thead>
      
      <tbody>
      <tr>
        <td>{props.graphData.value[0].fields.id}</td>
        <td>{props.graphData.value[0].fields.Name}</td>
        <td>{props.graphData.value[0].fields.DOB}</td>
        <td>{props.graphData.value[0].fields.PhoneNo}</td>
      </tr>
      <tr>
        <td>{props.graphData.value[1].fields.id}</td>
        <td>{props.graphData.value[1].fields.Name}</td>
        <td>{props.graphData.value[1].fields.DOB}</td>
        <td>{props.graphData.value[1].fields.PhoneNo}</td>
      </tr>
      <tr>
        <td>{props.graphData.value[2].fields.id}</td>
        <td>{props.graphData.value[2].fields.Name}</td>
        <td>{props.graphData.value[2].fields.DOB}</td>
        <td>{props.graphData.value[2].fields.PhoneNo}</td>
      </tr>
      </tbody>            
    </table>

  );
};