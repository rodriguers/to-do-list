import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar',
      completed: false
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      ...tasks, 
    {
      title: taskTitle,
      id: uuidv4(),
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