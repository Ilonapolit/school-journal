// WeekDays.js

// import React, { useState } from 'react';
// import './WeekDays.css';

// const staticGrades = {
//   ორშაბათი: '5',
//   სამშაბათი: '4',
//   ოთხშაბათი: '3',
//   ხუთშაბათი: '5',
//   პარასკევი: '4',
// };

// function WeekDays() {
//   const [grades, setGrades] = useState(staticGrades);
//   const [newGrades, setNewGrades] = useState({
//     ორშაბათი: '',
//     სამშაბათი: '',
//     ოთხშაბათი: '',
//     ხუთშაბათი: '',
//     პარასკევი: '',
//   });

//   const handleGradeChange = (day, value) => {
//     setNewGrades(prevGrades => ({
//       ...prevGrades,
//       [day]: value,
//     }));
//   };

//   const handleAddGrade = (day) => {
//     setGrades(prevGrades => ({
//       ...prevGrades,
//       [day]: newGrades[day],
//     }));
//     setNewGrades(prevGrades => ({
//       ...prevGrades,
//       [day]: '',
//     }));
//   };



//   return (
//     <div>
//       <h2>Week Days</h2>
//       <ul className="week-days-list">
//         {Object.keys(grades).map(day => (
//           <li key={day}>
//             {day}: {grades[day]}
//             <input
//               type="text"
//               value={newGrades[day]}
//               onChange={(e) => handleGradeChange(day, e.target.value)}
//               placeholder="Enter grade"
//             />
//             <button onClick={() => handleAddGrade(day)}>Add Grade</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default WeekDays;
import React, { useState } from 'react';
import './WeekDays.css';

const staticGrades = {
  ორშაბათი: '5',
  სამშაბათი: '4',
  ოთხშაბათი: '3',
  ხუთშაბათი: '5',
  პარასკევი: '4',
};

function WeekDays({ subject }) {
  const [grades, setGrades] = useState(staticGrades);
  const [newGrades, setNewGrades] = useState({
    ორშაბათი: '',
    სამშაბათი: '',
    ოთხშაბათი: '',
    ხუთშაბათი: '',
    პარასკევი: '',
  });

  const handleGradeChange = (day, value) => {
    setNewGrades((prevGrades) => ({
      ...prevGrades,
      [day]: value,
    }));
  };

  const handleAddGrade = (day) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [day]: newGrades[day],
    }));
    setNewGrades((prevGrades) => ({
      ...prevGrades,
      [day]: '',
    }));
  };

  return (
    <div>
      <h2>{subject}</h2>
      <ul className="week-days-list">
        {Object.keys(grades).map((day) => (
          <li key={day}>
            {day}: {grades[day]}
            <input
              type="text"
              value={newGrades[day]}
              onChange={(e) => handleGradeChange(day, e.target.value)}
              placeholder="Enter grade"
            />
            <button onClick={() => handleAddGrade(day)}>Add Grade</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeekDays;

