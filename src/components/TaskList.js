import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList(props) {
  const filteredTasks = props.category === "All"
  ? TASKS
  : TASKS.filter(task => task.category === props.category);

  const taskItems =filteredTasks.map((task, index) => (
    <Task key={index} text={task.text} />
  ))
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
