import React from "react";

function Profile({ data, setData }) {
  const { name, email, age } = data;

  const handleDataChange = (e) => {};
  return (
    <div>
      <div>
        <label>Name :</label>
        <input type="text" value={name} onChange={handleDataChange} />
      </div>

      <div>
        <label>Age :</label>
        <input type="text" value={age} onChange={handleDataChange} />
      </div>

      <div>
        <label>Email :</label>
        <input type="text" value={email} onChange={handleDataChange} />
      </div>
    </div>
  );
}

export default Profile;
