
import React from 'react';
import './App.css';
import AddUser from './features/AddUser/AddUser'
import WeekDays from './features/WeekDays/WeekDays'
import Subjects from './features/Subjects/Subjects';

function App() {
  return (
    <div className="task-management">
      
      <div className="left">
      <h1>School Journal</h1>
        <AddUser />
        <WeekDays/>
        <Subjects/>
      </div>
    </div>
  );
}

export default App;