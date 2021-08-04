import React from "react";
import axios from "axios";

const DepartmentList = () => {
  useEffect(() => {
    axios.get("http://localhost:5000/api/departments");
  }, []);
  return <div></div>;
};

export default DepartmentList;
