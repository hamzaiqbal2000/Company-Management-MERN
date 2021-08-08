import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamList = ({ team1, department }) => {
  const [teams, setTeams] = useState(team1);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/teams/${team}`)
  //     .then((data) => {
  //       setTeams(data.data);
  //       console.log(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="team-list">
      <h1>{teams[0]}</h1>
      {/* <h2>{department.inCharge}</h2> */}
      {/* <h2>{teams}</h2> */}
    </div>
  );
};

export default TeamList;
