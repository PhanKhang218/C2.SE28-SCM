import React, { useState } from "react";
import "./ClubSelection.css";
import { useNavigate } from "react-router-dom";

function ClubSelection() {
  let navigate = useNavigate();

  const clubs = [
    {
      group: "Group classes",
      className: "Gym",
      classId: 2,
      dayOfWeek: "3-5-7",
      clupId: 1,
      phone: "0362508888",
      price: "250000",
      star: "4",
      classAddress: "250 Nguyen Van Linh, Quna Thanh Khe, TP. Da Nang",
      closeTime: "21PM",
      openTime: "7M",
      capacity: "5 người",
      clubName: "California Fitness & Yoga Đà Nẵng",
      description:
        "Đây là nơi mà các bạn có thể tập luyện và thực hành các bài tập thể dục",
    },
    {
      group: "Kid classes",
      className: "Gym",
      classId: 4,
      dayOfWeek: "T2-CN",
      clupId: 2,
      phone: "0362508888",
      price: "Giá 400.000₫ - 800.000₫ / Tháng",
      star: "4.5",
      classAddress:
        "Tầng 7, 255 - 257 Hùng Vương, phường Vĩnh Trung, quận Thanh Khê, Đà Nẵng",
      closeTime: "21PM",
      openTime: "7M",
      capacity: "3000m2",
      clubName: "Elite Fitness And Yoga",
      description:
        "Đây là nơi mà các bạn có thể tập luyện và thực hành các bài tập thể dục",
    },
    {
      group: "Personal Training",
      className: "Football",
      classId: 6,
      dayOfWeek: "T2-CN",
      clupId: 1,
      phone: "0362508888",
      price: "Giá 400.000₫ - 800.000₫ / Tháng",
      star: "4.5",
      classAddress:
        "Tầng 7, 255 - 257 Hùng Vương, phường Vĩnh Trung, quận Thanh Khê, Đà Nẵng",
      closeTime: "21PM",
      openTime: "7M",
      capacity: "3000m2",
      clubName: "Sân bóng Đức Nam",
      description:
        "Đây là nơi mà các bạn có thể tập luyện và thực hành các bài tập thể dục",
    },
  ];

  const [selectedGroup, setSelectedGroup] = useState("Group classes");

  const handleOnClickToRegister = (clubName) => {
    navigate(
      "/" + encodeURIComponent(clubName.replace(/\s+/g, "-")).toLowerCase()
    );
  };

  let selectedClubs = clubs.filter((club) => club.group === selectedGroup);

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
          <div key={club.clubName} className="club-box">
            <img src={club.image} alt={club.clubName} />
            <h2>{club.clubName}</h2>
            <p>{club.phone}</p>
            <p>{club.price}</p>
            {club.group === "Group classes" && (
              <>
                <p>{club.dayOfWeek}</p>
                <p>{club.classAddress}</p>
                <p>{club.capacity}</p>
              </>
            )}
            {club.group === "Kid classes" && (
              <>
                <p>{club.dayOfWeek}</p>
                <p>{club.classAddress}</p>
                <p>{club.capacity}</p>
              </>
            )}
            {club.group === "Personal Training" && (
              <>
                <p>{club.className}</p>
                <p>{club.classAddress}</p>
                <p>{club.capacity}</p>
              </>
            )}
            <button onClick={() => handleOnClickToRegister(club.clubName)}>
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubSelection;
