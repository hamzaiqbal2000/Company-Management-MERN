import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamList = ({ team1 }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams")
      .then((data) => {
        setTeams(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="team-list">
      <h2>{team1._id}</h2>
    </div>
  );
};

export default TeamList;
