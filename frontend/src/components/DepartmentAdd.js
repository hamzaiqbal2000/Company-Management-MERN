import axios from "axios";
import React, { useState } from "react";

const DepartmentAdd = () => {
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputIncharge, setInputIncharge] = useState("");
  const [inputMember, setInputMember] = useState("");
  const [inputTeamLead, setInputTeamLead] = useState("");

  const [department, setDepartment] = useState([]);
  const [incharge, setIncharge] = useState([]);
  const [member, setMember] = useState([]);
  const [teamLead, setTeamLead] = useState([]);
  const [team, setTeam] = useState([]);

  const inputDepartmentHandler = (e) => {
    setInputDepartment(e.target.value);
  };

  const inputInchargeHandler = (e) => {
    setInputIncharge(e.target.value);
  };

  const inputMemberHandler = (e) => {
    setInputMember(e.target.value);
  };

  const inputTeamLeadHandler = (e) => {
    setInputTeamLead(e.target.value);
  };

  const createDepartment = async () => {
    let res = await axios.post("http://localhost:5000/api/users", {
      name: inputIncharge,
    });
    setIncharge(res.data._id);

    let res1 = await axios.post("http://localhost:5000/api/users", {
      name: inputMember,
    });
    console.log(res1.data._id);
    setMember(res1.data._id);

    let res2 = await axios.post("http://localhost:5000/api/users", {
      name: inputTeamLead,
    });
    console.log(res2.data._id);
    setTeamLead(res2.data._id);

    //if (member && teamLead) {
    let res3 = await axios.post("http://localhost:5000/api/teams", {
      peopleId: [res1.data._id],
      teamLeadId: res2.data._id,
    });
    console.log("res3 " + res3.data._id);
    setTeam(res3.data._id);
    //}
    try {
      if (team && incharge) {
        let res4 = await axios.post("http://localhost:5000/api/departments", {
          name: inputDepartment,
          teamsId: [res3.data._id],
          inChargeId: res.data._id,
        });
        setDepartment(res4.data._id);
        console.log("res4 " + res4.data._id);
        alert("Department added");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="department_Add">
        <h2>Add a new Department</h2>
        <input
          type="text"
          placeholder="Department Name"
          onChange={inputDepartmentHandler}
        />
        <input
          type="text"
          placeholder="Incharge Name"
          onChange={inputInchargeHandler}
        />
        <input
          type="text"
          placeholder="Team member Name"
          onChange={inputMemberHandler}
        />
        <input
          type="text"
          placeholder="TeamLead Name"
          onChange={inputTeamLeadHandler}
        />
        <button onClick={createDepartment}>Add Department</button>
      </div>
      <h3>{department}</h3>
    </div>
  );
};

export default DepartmentAdd;
