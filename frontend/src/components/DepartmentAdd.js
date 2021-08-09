import React from "react";

const DepartmentAdd = () => {
  return (
    <div>
      <div className="department_Add">
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
    </div>
  );
};

export default DepartmentAdd;
