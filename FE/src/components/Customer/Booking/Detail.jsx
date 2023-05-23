import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Buttons";
import { DaySlots, TimeSlots, DisplayBooking, IconLoading } from "../../Card";
import Layout from "../../Layout";
import Swal from "sweetalert2";
import Navbar from "../../NavBar/NavBar";
import "./Detail.css";

export default function Venue() {
  const [venues, setVenues] = useState([]);
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  // const [price, setPrice] = useState(0);
  const price = 1000000;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  document.title = `SCM | ${venues.name}`;

  const [selectedDay, setSelectedDay] = useState({
    day: moment().format("dddd"),
    date: moment().format("LL"),
  });
  const [selectedTime, setSelectedTime] = useState(
    moment().startOf("day").format("LT")
  );
  const dayFormat = `${selectedDay.day}, ${moment(selectedDay.date).format(
    "DD MMMM YYYY"
  )}`;

  //
  const [selectedMonth, setSelectedMonth] = useState(moment().month());
  const [selectedYear, setSelectedYear] = useState(moment().year());

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleBookNow = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      const createPaymentResponse = await axios.post(
        "http://localhost:9000/api/payment/create_payment",
        {
          amount: price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (createPaymentResponse.data.status === "ok") {
        const paymentUrl = createPaymentResponse.data.url;

        window.location.href = paymentUrl;
      } else {
        console.error("Failed to create payment");
      }
    } catch (error) {
      console.error("Error creating payment", error);
    }
  };

  return (
    <Layout>
      <Navbar />

      <div className="w-full my-5">
        <div className="my-3 space-y-5">
          <div className="booking-container space-y-2">
            <div className="admin-management">BOOKING SCHEDULE</div>
            <h5 className="booking-description">
              Please select the date and time you want to book
            </h5>
          </div>
          <div className="select-div">
            <label className="select-label" htmlFor="month">
              Select Month:
            </label>
            <select
              className="select-box"
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {moment.months().map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <label htmlFor="year" className="select-label-year">
              Select Year:
            </label>
            <select
              className="select-box"
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {Array.from({ length: 10 }, (_, i) => moment().year() + i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="desc-timeslot">SELECT DAY: </div>

          <DaySlots
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            month={selectedMonth}
            year={selectedYear}
          />
          <div className="border-y-2 py-5">
            <div className="desc-timeslot">SELECT TIME: </div>
            <TimeSlots
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              open_hour={open ? parseInt(open) : 6}
              close_hour={close ? parseInt(close) : 21}
            />
          </div>
          {selectedDay && selectedTime && (
            <DisplayBooking
              selectedDay={selectedDay}
              selectedTime={selectedTime}
              price={price ? price : 0}
            />
          )}
        </div>
        <div
          className="flex justify-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button onClick={handleBookNow}>Book Now</Button>
        </div>
      </div>
    </Layout>
  );
}
