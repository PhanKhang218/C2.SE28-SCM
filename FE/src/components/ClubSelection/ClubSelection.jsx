import React, { useState } from "react";
import "./ClubSelection.css";

function ClubSelection() {
  const clubs = [
    { name: "Gym", image: "./img/gym.avif", group: "Group classes" },
    { name: "Tennis", image: "./img/tennis.avif", group: "Group classes" },
    { name: "Boxing", image: "./img/boxing.avif", group: "Group classes" },
    {
      name: "Boxing Kids",
      image: "./img/boxing-kids.avif",
      group: "Kid classes",
    },
    { name: "Badminton", image: "./img/badminton.avif", group: "Kid classes" },
    {
      name: "Football Kids",
      image: "./img/football-kids.avif",
      group: "Kid classes",
    },
    { name: "Premium PT", image: "./img/PT.avif", group: "Personal Training" },
    {
      name: "Basic PT",
      image: "./img/PT-premium.avif",
      group: "Personal Training",
    },
  ];

  const [selectedGroup, setSelectedGroup] = useState("Group classes");

  const groupClasses = clubs.filter((club) => club.group === "Group classes");
  const kidClasses = clubs.filter((club) => club.group === "Kid classes");
  const personalTraining = clubs.filter(
    (club) => club.group === "Personal Training"
  );

  let selectedClubs = [];
  if (selectedGroup === "Group classes") {
    selectedClubs = groupClasses;
  } else if (selectedGroup === "Kid classes") {
    selectedClubs = kidClasses;
  } else if (selectedGroup === "Personal Training") {
    selectedClubs = personalTraining;
  }

  return (
    <div className="service">
      <p className="service-title" style={{ textAlign: "center" }}>
        DỊCH VỤ CỦA CHÚNG TÔI
      </p>
      <div className="group-selection">
        <button onClick={() => setSelectedGroup("Group classes")}>
          Group classes
        </button>
        <button onClick={() => setSelectedGroup("Kid classes")}>
          Kid classes
        </button>
        <button onClick={() => setSelectedGroup("Personal Training")}>
          Personal Training
        </button>
      </div>
      <div className="club-selection">
        {selectedClubs.map((club) => (
          <div key={club.name} className="club-box">
            <img src={club.image} alt={club.name} />
            <h2>{club.name}</h2>
            <button>Register</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubSelection;
