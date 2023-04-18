import React from "react";
import Navbar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./Football.css";
function Football() {
  let navigate = useNavigate();

  const clubs = [
    {
      name: "Sân bóng Đức Nam",
      image: "./img/gym.avif",
      price: "Giá 200.000₫ - 350.000₫ / Trận",
      star: 5,
      capacity: "5 người",
    },
    {
      name: "Sân bóng trường ĐH TDTT Đà Nẵng",
      image: "./img/tennis.avif",
      price: "Giá 200.000₫ - 350.000₫ / Trận",
      star: 5,
      capacity: "5 người",
    },
    {
      name: "Sân Chuyên Việt",
      image: "./img/boxing.avif",
      price: "Giá 200.000₫ - 350.000₫ / Trận",
      star: 5,
      capacity: "5 người",
    },
    {
      name: "Sân Trưng Vương",
      image: "./img/football/san-trung-vuong.jpeg",
      price: "Giá 200.000₫ - 350.000₫ / Trận",
      star: 3.5,
      capacity: "5 người",
    },
    {
      name: "Sân bóng Trường Đại Học Duy Tân",
      image: "./img/football.avif",
      price: "Giá 200.000₫ - 350.000₫ / Trận",
      star: 4,
      capacity: "5 người",
    },
  ];

  const handleOnclickToRegister = async (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const renderStars = (star) => {
    const fullStars = Math.floor(star);
    const halfStars = star % 1 !== 0;
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star star-yellow"></i>);
    }

    if (halfStars) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt star-yellow"></i>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={i + fullStars + halfStars} className="far fa-star"></i>
      );
    }

    return stars;
  };

  return (
    <div className="container-foolball">
      <Navbar />
      <div className=" football-box">
        {clubs.map((club) => {
          return (
            <div key={club.name} className="club-box">
              <img src={club.image} alt={club.name} />
              <h2
                style={{
                  fontSize: "16px",
                }}
              >
                {club.name}
              </h2>
              <p
                style={{
                  color: "#ff6700",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                {club.price}
              </p>
              <div
                className="abc"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "15px",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                  }}
                >
                  {renderStars(club.star)}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Số người: {club.capacity}
                </p>
              </div>
              <button onClick={handleOnclickToRegister}>Register</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Football;
