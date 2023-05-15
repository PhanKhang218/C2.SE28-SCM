import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ClassDetail() {
  const { sportName } = useParams();
  const [classDetails, setClassDetails] = useState([]);

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:9000/class", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const filteredDetails = response.data.filter(
          (classItem) =>
            classItem.sportName.toLowerCase() === sportName.toLowerCase()
        );
        console.log(filteredDetails);
        setClassDetails(filteredDetails);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchClassDetails();
  }, [sportName]);

  return (
    <div>
      <h1>Class Details for {sportName}</h1>
      {classDetails.map((classItem) => (
        <div key={classItem.classId}>
          <h2>{classItem.className}</h2>
          <p>{classItem.description}</p>
          <p>Address: {classItem.classAddress}</p>
          <p>Phone: {classItem.phone}</p>
          <p>Price: {classItem.price}</p>
          <p>Opening Time: {classItem.openTime}</p>
          <p>Closing Time: {classItem.closeTime}</p>
          <p>Capacity: {classItem.capacity}</p>
          <p>Day of Week: {classItem.dayOfWeek}</p>
          <p>Star Rating: {classItem.star}</p>
          <img src={classItem.classImage} alt={classItem.className} />
        </div>
      ))}
    </div>
  );
}

export default ClassDetail;
