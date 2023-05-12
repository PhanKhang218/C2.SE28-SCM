import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MemberList.css";

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getMemberList(token);
        setMembers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const getMemberList = async (token) => {
    const response = await fetch("http://localhost:9000/member", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch member list");
    }
  };

  return (
    <div className="table-container">
      <table className="table table-bordered table-member">
        <thead>
          <tr>
            {members.length > 0 &&
              Object.keys(members[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {members.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberList;

// <div>
//   <h1>Member List</h1>
//   <Link to="/members/create">Create New Member</Link>
//   <ul className="member-list">
//     {members.map((member) => (
//       <li key={member.memberId}>
//         <div>
//           <img src={member.image} alt={member.name} />
//         </div>
//         <div>
//           <h3>{member.name}</h3>
//           <p>Phone: {member.phone}</p>
//           <p>Age: {member.age}</p>
//           <p>Gender: {member.gender}</p>
//           <p>Date of Birth: {member.dayOfBirth}</p>
//         </div>
//         <Link to={`/members/${member.memberId}`}>View Details</Link>
//       </li>
//     ))}
//   </ul>
// </div>
