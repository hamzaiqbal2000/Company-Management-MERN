import React, { useState, useEffect } from "react";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((data) => {
        setDepartments(data.data[0]);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{departments && <h1>{departments.name}</h1>}</div>;
};

export default DepartmentList;
