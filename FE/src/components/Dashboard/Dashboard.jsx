import React, { useEffect, useState } from "react";
import ClubSelection from "../ClubSelection/ClubSelection";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="Main">
      <div className="dashboard">
        <NavBar />
        <div className="container-main">
          <p className="dashboard-description">
            Tập luyện thể dục giúp cải thiện sức khỏe, giảm cân, tăng cơ bắp và
            cải thiện ngoại hình. Trang web của chúng tôi cung cấp các câu lạc
            bộ và nhân viên huấn luyện chuyên nghiệp để hỗ trợ và cung cấp lộ
            trình tập luyện phù hợp cho bạn. Hãy bắt đầu quá trình tập luyện của
            bạn tại đây!
          </p>
        </div>
      </div>
      <ClubSelection />
      <div
        className="subtitle"
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        BLOG
      </div>
      <div
        className="container-second"
        style={{ paddingTop: "60px", paddingBottom: "60px", color: "#999" }}
      >
        {/* 1 */}
        <div className="container-second-1 col">
          <div className="caption">DIET</div>
          <div className="info">
            <div className="title">
              16 Healthy Bulking Foods For Hard Gainers (With Meal Plan)
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="container-second-2 col">
          <div className="caption">DIET</div>
          <div className="info">
            <div className="title">
              The Best Bulking Leg Workouts: 10 Must-Do Exercises
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="container-second-3 col">
          <div className="caption">DIET</div>
          <div className="info">
            <div className="title">
              16 Healthy Bulking Foods For Hard Gainers (With Meal Plan)
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
