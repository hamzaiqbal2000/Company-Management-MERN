import React from "react";

const UserAdd = () => {
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
      <div className="searchUser">
        <input type="text" onChange={InputHandler} />
        <button onClick={createUser}>Submit</button>
      </div>
    </div>
  );
};

export default UserAdd;
