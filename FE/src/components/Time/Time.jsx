import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../NavBar/NavBar";
import "./Time.css";
export default function Time() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="time">
      <Navbar />
      <div className="container">
        <div className="select-datetime">Select a Date and Time</div>
        <div className="datetime">
          <DatePicker
            className="date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
          <DatePicker
            className="time"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
      </div>
    </div>
  );
}
