import React from "react";
import Navbar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./Gym.css";
function Gym() {
  let navigate = useNavigate();

  const clubs = [
    {
      name: "California Fitness & Yoga Đà Nẵng",
      image: "./img/gym/cali.jpeg",
      price: "Giá 500.000₫ - 1.500.000₫ / Tháng",
      address: "271 Nguyễn Văn Linh, P. Vĩnh Trung, Q. Thanh Khê, TP. Đà Nẵng",
      star: 4,
      capacity: "1000m2",
    },
    {
      name: "Elite Fitness And Yoga",
      image: "./img/gym/elite.jpeg",
      price: "Giá 400.000₫ - 800.000₫ / Tháng",
      address:
        "Tầng 7, 255 - 257 Hùng Vương, phường Vĩnh Trung, quận Thanh Khê, Đà Nẵng",
      star: 3.5,
      capacity: "3000m2",
    },
    {
      name: "The City gym Đà Nẵng",
      image: "./img/gym/city-gym.webp",
      price: "Giá 500.000 / Tháng",
      address: "512 - 514 Nguyễn Tri Phương, Đà Nẵng",
      star: 5,
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
              <div className="address-fb">
                <strong>Địa chỉ:</strong> {club.address}
              </div>
              <button onClick={handleOnclickToRegister}>Đặt lịch</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Gym;
