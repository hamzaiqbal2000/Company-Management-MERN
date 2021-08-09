import React from "react";
import Department from "./components/Department";
import DepartmentAdd from "./components/DepartmentAdd";
import TeamAdd from "./components/TeamAdd";
import UserAdd from "./components/UserAdd";

function App() {
  return (
    <div>
      <UserAdd />
      <TeamAdd />
      <DepartmentAdd />
      <Department />
    </div>
  );
}

export default App;
