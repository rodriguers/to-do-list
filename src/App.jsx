import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar',
      completed: false,
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      ...tasks, 
    {
      title: taskTitle,
      id: Math.random(10),
      completed: false,
    },
  ];

  setTasks(newTasks);

};
  return (
    <>
      <div className="container">
        <AddTask handleTaskAdd= {handleTaskAdd} />
        <Tasks tasks={tasks} />
      </div>
      
    
    </>
    
  )
};
export default App;