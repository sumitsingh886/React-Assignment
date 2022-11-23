import React, { useState } from "react";
import Createtask from "./Createtask";
import Task from "./Task";
import "./Todo.css";

function Todo() {
  const [tasks, setTasks] = useState([{
    title: "complete workout",
    completed: true
  }]);
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };
  const complete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };
  const remove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    //splice(position,remove item)
    setTasks(newTasks);
  };
  return (
    <div className="container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            complete={complete}
            remove={remove}
          />
        ))}
      </div>
      <div className="createTask">
        <Createtask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
