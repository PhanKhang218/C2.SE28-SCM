import React from "react";
import "./ClubSelection.css";

function ClubSelection() {
  const clubs = [
    { name: "Gym", image: "./img/gym.avif", group: "Group classes" },
    // <img src="" alt="#" />
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
