import React, { useState } from "react";
import TeamList from "./TeamList";

const DepartmentList = ({ department, setDepartments }) => {
  const [departmentList, setDepartmentList] = useState([]);
  //events
  const departmentHandler = () => {
    setDepartmentList(department.teams.map((team) => team));
  };

  return (
    <div className="department-list">
      <button onClick={departmentHandler}>{department.name}</button>
      <h2>{departmentList}</h2>
    </div>
  );
};

export default DepartmentList;
