// App.js
import React from 'react';
import './App.css';
import AddUser from './features/AddUser/AddUser'


function App() {
  return (
    <div className="task-management">
      
      <div className="left">
      <h1>School Journal</h1>
        <AddUser />
      </div>
    </div>
  );
}

export default App;