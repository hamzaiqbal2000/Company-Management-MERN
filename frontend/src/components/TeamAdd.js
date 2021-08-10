import axios from "axios";
import React, { useState } from "react";

const TeamAdd = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputTeam, setInputTeam] = useState("");
  const [people, setPeople] = useState([]);
  const [teamLead, setTeamLead] = useState([]);

  //events
  const inputUserHandler = (e) => {
    setInputUser(e.target.value);
  };

  const inputTeamHandler = (e) => {
    setInputTeam(e.target.value);
  };

  const createTeam = async () => {
    let res = await axios.post("http://localhost:5000/api/users", {
      name: inputUser,
    });
    console.log(res.data._id);
    setPeople(res.data._id);

    let res1 = await axios.post("http://localhost:5000/api/users", {
      name: inputTeam,
    });
    console.log(res1.data._id);
    setTeamLead(res1.data._id);

    if (people && teamLead) {
      let res2 = await axios.post("http://localhost:5000/api/teams", {
        peopleId: [res.data._id],
        teamLeadId: res1.data._id,
      });
      console.log("res2 " + res2.data._id);
      alert("team added");
    }
  };

  return (
    <div>
      <div className="createTeam">
        <h2>Add a new Team</h2>
        <input
          type="text"
          placeholder="  User Name"
          onChange={inputUserHandler}
        />
        <input
          type="text"
          placeholder="  teamLead Name"
          onChange={inputTeamHandler}
        />
        <button onClick={createTeam}>Add Team</button>
      </div>
      <div>
        <h5>{people}</h5>
        <h5>{teamLead}</h5>
      </div>
    </div>
  );
};

export default TeamAdd;
