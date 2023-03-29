import React, { useEffect, useState } from "react";
import Club from "../Club/Club";
import NavBar from "../NavBar/NavBar";

// import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="Main">
      <NavBar />
      <div className="dashboard">
        <div className="container-main">
          <p style={{ paddingTop: "20px", color: "#fff" }}>
            Đây là nơi mà các bạn có thể tập luyện và thực hành các bài tập thể
            dục để cải thiện sức khỏe, giảm cân, tăng cơ bắp và cải thiện ngoại
            hình. Ngoài ra, phòng gym cũng có nhân viên huấn luyện chuyên
            nghiệp, có thể hướng dẫn và cung cấp các lộ trình tập luyện cho
            người mới bắt đầu hoặc người muốn cải thiện hiệu quả tập luyện
          </p>
        </div>
      </div>
    </div>
  );
}
