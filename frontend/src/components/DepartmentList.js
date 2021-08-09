import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamList from "./TeamList";

//one departmentr
const DepartmentList = ({ department }) => {
  // const [team1, setTeam1] = useState([]);
  //have list/array of ids of teams
  const [teams, setTeams] = useState([]);
  // // have id of an individual team
  const [town, setTown] = useState([]);
  const [peoples, setPeoples] = useState([]);
  const [teamLead, setTeamLead] = useState([]);
  const [incharge, setIncharge] = useState([]);
  const [input, setInput] = useState("");

  //events

  const teamHandler = async () => {
    //contain one team which contains Array of people's Id and a teamLead Id
    const res = await axios.get(`http://localhost:5000/api/teams/${teams}`);
    console.log(res.data);
    setTown(res.data);
    console.log(town);
    // const peoplelist = team.people.map((people1) => people1);

    console.log("teams " + teams);
    console.log("town.people " + town.people);
    console.log("peoples " + peoples);
  };
  const townHandler = async () => {
    console.log(town);

    const res1 = await axios.get(
      `http://localhost:5000/api/users/${town.people}`
    );
    console.log(res1.data);
    setPeoples(res1.data);
    console.log(peoples);

    const res2 = await axios.get(
      `http://localhost:5000/api/users/${town.teamLead}`
    );
    setTeamLead(res2.data);

    const res3 = await axios.get(
      `http://localhost:5000/api/users/${department.inCharge}`
    );
    setIncharge(res3.data);
  };

  return (
    <div className="department-list">
      <button
        onClick={() => {
          department.teams.map((team) => {
            setTeams(team);
            <TeamList team1={team} />;
            //console.log("teams " + team);
          });
        }}
      >
        Department Name: {department.name}
      </button>
      {/* <button>{team1}</button> */}
      {/* {teams.prototype.map((state) => ( */}
      <button onClick={teamHandler}>Team ID: {teams} </button>
      <button onClick={townHandler}>people and teamLead names</button>
      {teams && <h1>department Incharge: {department.inCharge}</h1>}
      {/* ))} */}

      <h3>People Id: {town.people}</h3>
      <h5>{peoples.name}</h5>
      <h6>{teamLead.name}</h6>
      <h4>teamLead: {town.teamLead}</h4>
      <p>
        <strong>{incharge.name}</strong>
      </p>
    </div>
  );
};

export default DepartmentList;
