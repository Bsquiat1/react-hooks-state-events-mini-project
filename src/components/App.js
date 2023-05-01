import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("ALL");

  function handleCategoryChange(newCategory) {
    setCategory(newCategory)
  }

  function handleTaskSubmit(newTask) {
    setTasks([...tasks, newTask]);
  
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} OnTaskSubmit={handleTaskSubmit}/>
      <TaskList tasks={tasks} category={category} />
    </div>
  );
}

export default App;
