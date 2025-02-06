import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

function TabForm() {
  const [data, setData] = useState({
    //Keeping data at the central place(Data Persistent)
    name: "Dhruv",
    age: 21,
    email: "dhruv@gmail.com",
    interests: ["Workout", "Music"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    //Config driven code maintanability and Scalability
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>

      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </div>
  );
}

export default TabForm;
