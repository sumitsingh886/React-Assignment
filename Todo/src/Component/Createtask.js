import React, { useState } from "react";

function Createtask({addTask}) {
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Createtask;
