import React, { useEffect, useState } from "react";
import Club from "../Club/Club";
import NavBar from "../NavBar/NavBar";

// import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="Main">
      <div className="dashboard">
        <NavBar />
        <div className="container-main">
          <p style={{ paddingTop: "20px", color: "#fff", fontSize: "16px" }}>
            Đây là nơi mà các bạn có thể tập luyện và thực hành các bài tập thể
            dục để cải thiện sức khỏe, giảm cân, tăng cơ bắp và cải thiện ngoại
            hình. Ngoài ra, phòng gym cũng có nhân viên huấn luyện chuyên
            nghiệp, có thể hướng dẫn và cung cấp các lộ trình tập luyện cho
            người mới bắt đầu hoặc người muốn cải thiện hiệu quả tập luyện
          </p>
        </div>
      </div>
      <div
        className="container-second"
        style={{ paddingTop: "60px", paddingBottom: "60px", color: "#999" }}
      >
        {/* 1 */}
        <div className="container-second-1 col">
          <a style={{ color: "#999" }}>1</a>
          <div className="caption">DIET</div>
          <div className="info">
            <div className="title">
              16 Healthy Bulking Foods For Hard Gainers (With Meal sdsdsdsPlan)
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="container-second-2 col">
          <a></a>
          <div className="caption">DIET</div>
          <div className="info">
            <div className="title">
              The Best Bulking Leg Workouts: 10 Must-Do Exercises
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="container-second-3 col">
          <a style={{ color: "#999" }}>3</a>
          <div className="caption">DIET</div>
          <div className="info">
            <div className="title">
              16 Healthy Bulking Foods For Hard Gainers (With Meal Plan)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
