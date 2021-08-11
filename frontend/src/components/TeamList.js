import React, { useState } from "react";
import axios from "axios";
import DepartmentUpdate from "./DepartmentUpdate";

//one departmentr
const TeamList = ({ department }) => {
  // const [team1, setTeam1] = useState([]);
  //have list/array of ids of teams
  const [teams, setTeams] = useState([]);
  // // have id of an individual team
  const [town, setTown] = useState([]);
  const [peoples, setPeoples] = useState([]);
  const [teamLead, setTeamLead] = useState([]);
  const [incharge, setIncharge] = useState([]);

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
  const townHandler = async () => {
    console.log(town);

    // const res1 = await axios.get(
    //   `http://localhost:5000/api/users/${town.people}`
    // );
    // console.log(res1.data);
    // setPeoples(res1.data);
    // console.log(peoples);

    // const res2 = await axios.get(
    //   `http://localhost:5000/api/users/${town.teamLead}`
    // );
    // setTeamLead(res2.data);

    // const res3 = await axios.get(
    //   `http://localhost:5000/api/users/${department.inCharge}`
    // );
    // setIncharge(res3.data);
  };

  return (
    <div className="department-list">
      <table>
        <tbody>
          <tr>
            <td>
              <button
                className="button-1"
                onClick={() => {
                  department.teams.map((team) => {
                    setTeams(team);
                    // <TeamList team1={team} />;
                    //console.log("teams " + team);
                  });
                }}
              >
                Department Name: {department.name}
              </button>
            </td>
            <td>
              <button className="button-2" onClick={teamHandler}>
                teamId: {teams}
              </button>
            </td>
            {/* <td>
            <button className="button-3" onClick={townHandler}>
              people and teamLead names
            </button>
          </td> */}
            <td>
              <h3>
                Incharge Name: <br />
                {incharge.name}
              </h3>
            </td>
            <td>
              <h3>
                People Name:<br></br>
                {peoples.name}
              </h3>
            </td>
            <td>
              <h3>
                Team Lead Name:<br></br>
                {teamLead.name}
              </h3>
            </td>
            <td>
              <DepartmentUpdate department={department} />
            </td>
          </tr>
        </tbody>
      </table>

      {/* <button>{team1}</button> */}
      {/* {teams.prototype.map((state) => ( */}

      {/* {teams && <h3>department Incharge: {department.inCharge}</h3>} */}
      {/* ))} */}

      {/* <h3>People Id: {town.people}</h3> */}

      {/* <h3>teamLead: {town.teamLead}</h3> */}
    </div>
  );
};

export default TeamList;
