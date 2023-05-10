import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./Gym.css";
import Footer from "../Footer/Footer";
import { getClassList } from "../../api/apiClient";

function Gym() {
  let navigate = useNavigate();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClassList();
        setClasses(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleOnclickToRegister = async (e) => {
    e.preventDefault();
    navigate("/time");
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
        {classes.map((classItem) => {
          return (
            <div key={classItem.classId} className="club-box">
              <img src={classItem.image} alt={classItem.className} />
              <h2
                style={{
                  fontSize: "16px",
                }}
              >
                {classItem.clubName}
              </h2>
              <p
                style={{
                  color: "#ff6700",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                {classItem.price}
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
                  {renderStars(classItem.star)}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Số người: {classItem.capacity}
                </p>
              </div>
              <div className="address-fb">
                <strong>Địa chỉ:</strong> {classItem.classAddress}
              </div>
              <button onClick={handleOnclickToRegister}>Đặt lịch</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Gym;
