import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar/NavBar";
import "./SchedulePage.css";

function SchedulePage() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:9000/booking", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          throw new Error("Failed to fetch bookings");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBookings();
  }, []);

  const handleTimeSelection = (time, row, column) => {
    setSelectedTime(time);
    setSelectedRow(row);
    setSelectedColumn(column);
  };

  const isTimeBooked = (row, column) => {
    const time = `${column + 1}h30 - ${column + 2}h30`; // Tính giờ dựa trên cột
    return bookings.some((booking) => {
      // Kiểm tra xem có booking nào trùng thời gian được chọn không
      return (
        booking.dayOfWeek === row + 1 && // Kiểm tra ngày trong tuần
        time >= booking.dateFrom && // Kiểm tra thời gian bắt đầu
        time <= booking.dateTo // Kiểm tra thời gian kết thúc
      );
    });
  };

  return (
    <div>
      <Navbar />
      <h2 className="schedule-title">Chọn giờ tập</h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Thứ 2</th>
            <th>Thứ 3</th>
            <th>Thứ 4</th>
            <th>Thứ 5</th>
            <th>Thứ 6</th>
            <th>Thứ 7</th>
            <th>Chủ nhật</th>
          </tr>
        </thead>
        <tbody>
          {/* 5h30 - 6h30 */}
          <tr>
            <td>5h30 - 6h30</td>
            <td
              onClick={() => handleTimeSelection("5h30 - 6h30", 0, 0)}
              className={isTimeBooked(0, 0) ? "booked" : ""}
            ></td>
            <td
              onClick={() => handleTimeSelection("5h30 - 6h30", 1, 0)}
              className={isTimeBooked(0, 6) ? "booked" : ""}
            ></td>
            <td
              onClick={() => handleTimeSelection("5h30 - 6h30", 2, 0)}
              className={isTimeBooked(0, 6) ? "booked" : ""}
            ></td>
            <td
              onClick={() => handleTimeSelection("5h30 - 6h30", 3, 0)}
              className={isTimeBooked(0, 6) ? "booked" : ""}
            ></td>
            <td
              onClick={() => handleTimeSelection("5h30 - 6h30", 4, 0)}
              className={isTimeBooked(0, 6) ? "booked" : ""}
            ></td>
            <td
              onClick={() => handleTimeSelection("5h30 - 6h30", 5, 0)}
              className={isTimeBooked(0, 6) ? "booked" : ""}
            ></td>
            <td
              onClick={() => handleTimeSelection("5h30 - 6h30", 6, 0)}
              className={isTimeBooked(0, 6) ? "booked" : ""}
            ></td>
          </tr>
          {/* 20h30 - 21h30 */}
          <tr>
            <td>20h30 - 21h30</td>
            <td
              onClick={() => handleTimeSelection("20h30 - 21h30", 0, 6)}
              className={isTimeBooked(0, 6) ? "booked" : ""}
            ></td>
            <td
              onClick={() => handleTimeSelection("20h30 - 21h30", 1, 6)}
              className={isTimeBooked(1, 6) ? "booked" : ""}
            ></td>
          </tr>
        </tbody>
      </table>
      {selectedTime && (
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          <p style={{ fontWeight: "bold" }}>Bạn đã chọn:</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ngày: </span>
            {selectedRow === 6 ? "Chủ Nhật" : `Thứ ${selectedRow + 2}`},{" "}
            <span style={{ fontWeight: "bold" }}>Giờ: </span>
            {selectedTime}
          </p>
        </div>
      )}
    </div>
  );
}

export default SchedulePage;
