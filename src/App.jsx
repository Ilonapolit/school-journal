
// import React from 'react';
// import './App.css';
// import AddUser from './features/AddUser/AddUser'
// import WeekDays from './features/WeekDays/WeekDays'
// import Subjects from './features/Subjects/Subjects';

// function App() {
//   return (
//     <div className="task-management">
      
//       <div className="left">
//       <h1>School Journal</h1>
//         <AddUser />
//         <WeekDays/>
//         <Subjects/>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';
// import AddUser from './features/AddUser/AddUser';
// import WeekDays from './features/WeekDays/WeekDays';
// import Subjects from './features/Subjects/Subjects';

// function App() {
//   const [selectedSubject, setSelectedSubject] = useState(null);

//   return (
//     <div className="task-management">
//       <div className="left">
//         <h1>School Journal</h1>
//         <AddUser />
//         <Subjects onSelectSubject={(subject) => setSelectedSubject(subject)} />
//         {selectedSubject && <WeekDays subject={selectedSubject} />}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './App.css';
import AddUser from './features/AddUser/AddUser';
import WeekDays from './features/WeekDays/WeekDays';
import Subjects from './features/Subjects/Subjects';

function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="task-management">
      <div className="left">
        <h1>School Journal</h1>
        <AddUser />
        <div className="subjects">
          <Subjects onSelectSubject={(subject) => setSelectedSubject(subject)} />
        </div>
      </div>
      <div className="right">
        {selectedSubject && (
          <div className="week-days">
            <WeekDays subject={selectedSubject} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// ...
