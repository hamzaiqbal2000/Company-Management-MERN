import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamList from "./TeamList";

const Department = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/departments")
      .then((data) => {
        setDepartments(data.data);
        //console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="department">
      {departments &&
        departments.map((department) => (
          <TeamList department={department} key={department._id} />
        ))}
    </div>
  );
};

export default Department;
