import React from "react";

function Interests({ data, setData }) {
  const { interests } = data;

  const handleDataChange = (e) => {
    const { name, checked } = e.target;
    setData((prevState) => ({
      ...prevState, // Keep the rest of the state unchanged
      interests: checked
        ? [...prevState.interests, name] // Add item if checked
        : prevState.interests.filter((item) => item !== name), // Remove item if unchecked
    }));
  };

  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={interests.includes("javascript")}
            onChange={handleDataChange}
          />
          JavaScript
        </label>
      </div>
    </div>
  );
}

export default Interests;
