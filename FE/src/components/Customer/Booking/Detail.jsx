import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../Buttons";
import { DaySlots, TimeSlots, DisplayBooking, IconLoading } from "../../Card";
import Layout from "../../Layout";
import { errorMessage, successMessage } from "../../../functions/Alert";
import Swal from "sweetalert2";
import Navbar from "../../NavBar/NavBar";
import "./Detail.css";
export default function Venue() {
  const params = useParams();
  const [venues, setVenues] = useState([]);
  const [operational, setOperational] = useState([]);
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [skeleton] = useState([1, 2, 3, 4]);
  // const role = statusRole();
  document.title = `Hobiku | ${venues.name}`;
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
  const [userId, setUserId] = useState("");
  const [creatorVenue, setCreatorVenue] = useState("");

  const bookNow = async (e) => {
    e.preventDefault();
    if (selectedTime === "00:00") {
      Swal.fire({ title: "Please select a day and time" });
    } else if (localStorage.getItem("user-info")) {
      const token = statusLogin();
      const startTime = moment(selectedTime, "HH:mm").clone();
      const endTime = moment(selectedTime, "HH:mm").clone().add(1, "hours");
      const booking = {
        venue_id: venues.id,
        total_price: price,
        day: dayFormat,
        start_date: startTime,
        end_date: endTime,
      };
      await axios
        .post(`${API}/booking`, booking, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            window.open(res.data.data.payment_url, "_blank");
            successMessage(res);
          } else {
            successMessage(res);
          }
        })
        .catch((err) => {
          errorMessage(err);
        });
    } else {
      Swal.fire({ title: "Login", text: "Please login first" });
      navigate("/login");
    }
  };
  const handleEdit = async () => {
    const venue_id = venues.id;
    localStorage.setItem("venue_id", venue_id);
    navigate(`/owner/edit/${venue_id}`);
  };
  const handleDelete = async (e) => {
    const copyId = localStorage.getItem("venue_id");
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.value) {
        deleteVenue(copyId);
        navigate("/");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your venue is safe :)", "error");
      }
    });
  };
  //
  const [selectedMonth, setSelectedMonth] = useState(moment().month());
  const [selectedYear, setSelectedYear] = useState(moment().year());

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
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
          <Button
            variant="solid"
            id="booking-button"
            className="text-center"
            onClick={(e) => bookNow(e)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </Layout>
  );
}
