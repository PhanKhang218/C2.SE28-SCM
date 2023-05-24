import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Sport.css";

function Sport() {
  const navigate = useNavigate();

  const [clubs, setClubs] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("Group classes");
  const sports = {
    sportImage: "",
    sportName: "",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:9000/sport", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData();
  }, []);

  const groupClasses = clubs.filter(
    (club) => club.sportGroup === "Group classes"
  );
  const kidClasses = clubs.filter((club) => club.sportGroup === "Kid classes");
  const personalTraining = clubs.filter(
    (club) => club.sportGroup === "Personal Training"
  );

  let selectedClubs = [];
  if (selectedGroup === "Group classes") {
    selectedClubs = groupClasses;
  } else if (selectedGroup === "Kid classes") {
    selectedClubs = kidClasses;
  } else if (selectedGroup === "Personal Training") {
    selectedClubs = personalTraining;
  }

  const handleToRegister = (sportName) => {
    navigate(`/${sportName}`);
  };

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
          <div key={club.sportId} className="club-box">
            <img src={club.sportImage} alt={club.sportName} />
            <h2>{club.sportName}</h2>
            <button onClick={() => handleToRegister(club.sportName)}>
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sport;
