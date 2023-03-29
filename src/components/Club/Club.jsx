import React from "react";

export default function Club() {
  const gym = [
    {
      ClassID: 4,
      ClassName: "Gym",
      Phone: "083942371",
      Price: "250.000VND",
      OpenTime: "5:00AM",
      CloseTime: "21:00PM",
      ClassAddress: "250 Nguyen Van Linh, Quan Thanh Khe, TP. Da Nang",
      DayOfWeek: "3-5-7",
      Description:
        "Đây là nơi mà các bạn có thể tập luyện và thực hành các bài tập thể dục để cải thiện sức khỏe, giảm cân, tăng cơ bắp và cải thiện ngoại hình. Ngoài ra, phòng gym cũng có nhân viên huấn luyện chuyên nghiệp, có thể hướng dẫn và cung cấp các lộ trình tập luyện cho người mới bắt đầu hoặc người muốn cải thiện hiệu quả tập luyện",
    },
  ];

  return (
    <>
      <div className="container-main">
        <p style={{ paddingTop: "20px", color: "#fff" }}>
          Đây là nơi mà các bạn có thể tập luyện và thực hành các bài tập thể
          dục để cải thiện sức khỏe, giảm cân, tăng cơ bắp và cải thiện ngoại
          hình. Ngoài ra, phòng gym cũng có nhân viên huấn luyện chuyên nghiệp,
          có thể hướng dẫn và cung cấp các lộ trình tập luyện cho người mới bắt
          đầu hoặc người muốn cải thiện hiệu quả tập luyện
        </p>
      </div>
    </>
  );
}
