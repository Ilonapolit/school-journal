import React, { useState } from 'react';
import "./AddUser.css";

function AddUser() {
  const [username, setUserName] = useState("");
  const [texts, setTexts] = useState([]);

  function handleAddText() {
    setTexts([...texts, username]);
    setUserName("");
  }

  return (
    <div className="add-user">
      <input
        placeholder="name and surname"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleAddText}>Add Student</button>
      <div>
        {texts.map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>
    </div>
  );
}

export default AddUser


