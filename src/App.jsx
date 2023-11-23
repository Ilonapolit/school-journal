// App.js
import React from 'react';
import './App.css';
import AddUser from './features/AddUser/AddUser'


function App() {
  return (
    <div className="task-management">
      <div className="left">
        <AddUser />
      </div>
    </div>
  );
}

export default App;