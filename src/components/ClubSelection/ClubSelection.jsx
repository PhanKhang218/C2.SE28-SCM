import React from "react";
import "./ClubSelection.css";

function ClubSelection() {
  const clubs = [
    { name: "Gym", image: "gym.jpg", group: "Group classes" },
    { name: "Tennis", image: "tennis.jpg", group: "Group classes" },
    { name: "Boxing", image: "football.jpg", group: "Group classes" },
    { name: "Boxing Kids", image: "football.jpg", group: "Kid classes" },
    { name: "Badminton", image: "football.jpg", group: "Kid classes" },
    { name: "Muay Thai Kids", image: "football.jpg", group: "Kid classes" },
    { name: "Premium PT", image: "football.jpg", group: "Personal Training" },
    { name: "Basic PT", image: "football.jpg", group: "Personal Training" },
  ];

  const groupClasses = clubs.filter((club) => club.group === "Group classes");
  const kidClasses = clubs.filter((club) => club.group === "Kid classes");
  const personalTraining = clubs.filter(
    (club) => club.group === "Personal Training"
  );

  return (
    <div className="service">
      <p className="service-title" style={{ textAlign: "center" }}>
        DỊCH VỤ CỦA CHÚNG TÔI
      </p>
      <div className="club-selection">
        {clubs.map((club) => (
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
