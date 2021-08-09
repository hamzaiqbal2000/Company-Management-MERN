import React from "react";
import Department from "./components/Department";
import TeamAdd from "./components/TeamAdd";
import UserAdd from "./components/UserAdd";

function App() {
  return (
    <div>
      <UserAdd />
      <TeamAdd />
      <Department />
    </div>
  );
}

export default App;
