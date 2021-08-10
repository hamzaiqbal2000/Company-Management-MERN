import React, { useState } from "react";
import axios from "axios";

const UserAdd = () => {
  const [input, setInput] = useState("");

  const InputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const createUser = async () => {
    let res = await axios.post("http://localhost:5000/api/users", {
      name: input,
    });
    setInput("");
    if (res) {
      alert("user added");
    }
  };

  return (
    <div>
      <div className="createUser">
        <h2>Add a new User</h2>
        <input type="text" onChange={InputHandler} />
        <button onClick={createUser}>Add User</button>
      </div>
    </div>
  );
};

export default UserAdd;
