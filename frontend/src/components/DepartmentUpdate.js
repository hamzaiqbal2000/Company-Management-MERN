import React, { useState } from "react";
import Popup from "./Popup";
import axios from "axios";

const DepartmentUpdate = (department) => {
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputIncharge, setInputIncharge] = useState("");
  const [inputMember, setInputMember] = useState("");
  const [inputTeamLead, setInputTeamLead] = useState("");

  const [department1, setDepartment1] = useState([]);
  const [incharge, setIncharge] = useState([]);
  const [member, setMember] = useState([]);
  const [teamLead, setTeamLead] = useState([]);
  const [team, setTeam] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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

  const updateHandler = async () => {
    console.log(department);
    let res = await axios.put("http://localhost:5000/api/users", {
      name: inputIncharge,
    });
    setIncharge(res.data._id);

    let res1 = await axios.put("http://localhost:5000/api/users", {
      name: inputMember,
    });
    console.log(res1.data._id);
    setMember(res1.data._id);

    let res2 = await axios.put("http://localhost:5000/api/users", {
      name: inputTeamLead,
    });
    console.log(res2.data._id);
    setTeamLead(res2.data._id);

    //if (member && teamLead) {
    let res3 = await axios.put("http://localhost:5000/api/teams", {
      peopleId: [res1.data._id],
      teamLeadId: res2.data._id,
    });
    console.log("res3 " + res3.data._id);
    setTeam(res3.data._id);
    //}
    try {
      if (team && incharge) {
        let res4 = await axios.put("http://localhost:5000/api/departments", {
          name: inputDepartment,
          teamsId: [res3.data._id],
          inChargeId: res.data._id,
        });
        setDepartment1(res4.data._id);
        console.log("res4 " + res4.data._id);
        alert("Department added");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="department-update">
      <div>
        <button onClick={togglePopup}>Update</button>

        {isOpen && (
          <Popup
            content={
              <div className="form-1">
                <h2>Update Department</h2>
                <input
                  type="text"
                  placeholder="  Department Name"
                  onChange={inputDepartmentHandler}
                />
                <input
                  type="text"
                  placeholder="  Incharge Name"
                  onChange={inputInchargeHandler}
                />
                <input
                  type="text"
                  placeholder="  Team member Name"
                  onChange={inputMemberHandler}
                />
                <input
                  type="text"
                  placeholder="  TeamLead Name"
                  onChange={inputTeamLeadHandler}
                />
                <button onClick={updateHandler}>Submit</button>
              </div>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
};

export default DepartmentUpdate;
