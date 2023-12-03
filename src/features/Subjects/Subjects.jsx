// import React from "react";
// function Subjects () {
//     return (
//         <div>
//             <h1>ინგლისური ენა</h1>
//             <h1>მათემატიკა</h1>
//             <h1>ისტორია</h1>
//         </div>
//     )
// }
// export default Subjects

import React from 'react';

function Subjects({ onSelectSubject }) {
  const subjects = ['ინგლისური', 'ისტორია', 'მათემატიკა'];

  return (
    <div>
      <h1>Subjects</h1>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            <button onClick={() => onSelectSubject(subject)}>{subject}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;


