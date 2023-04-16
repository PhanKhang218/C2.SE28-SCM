import React from "react";
import ClubSelection from "../ClubSelection/ClubSelection";

import "./Dashboard1.css";
import "../ClubSelection/ClubSelection.css";

export default function Dashboard1() {
  return (
    <div>
      <h1>Welcome to the Sports Club System</h1>
      <p>Please select a club to register:</p>

      <ClubSelection />
    </div>
  );
}
