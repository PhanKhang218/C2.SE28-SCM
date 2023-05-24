import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

import jwt_decode from "jwt-decode";
import Dashboard from "./components/Dashboard/Dashboard";
import AccountList from "./components/Admin/AccountList/AccountList";
import MemberList from "./components/Admin/Member/MemberList";
import EmployeeList from "./components/Admin/Employee/EmployeeList";

import Detail from "./components/Customer/Booking/Detail";
import Login from "./components/Login/Login";
import Gym from "./components/Customer/Gym/Gym";
import Football from "./components/Football/Football";
import Blog from "./components/Blog/Blog";
import AdminPage from "./components/Admin/AdminPage/AdminPage";
import Personnal from "./components/Personal/Personal";
import Sport from "./components/Customer/Sport/Sport";
import PaymentInformation from "./components/Customer/PaymentInformation/PaymentInformation";
import PaymentSuccess from "./components/Customer/PaymentSuccess/PaymentSuccess";
import Pricing from "./components/Pricing/Pricing";
import MuscleBody from "./components/Customer/MuscleBody/MuscleBody";

const checkRole = (roles, requiredRole) => {
  return roles.includes(requiredRole);
};

const App = () => {
  const [userData, setUserData] = useState(null);

  const token = localStorage.getItem("token");
  let decodedToken = null;
  let userRole = [];

  if (token) {
    decodedToken = jwt_decode(token);
    userRole = decodedToken.role.map((role) => role.authority);
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/personal" element={<Personnal />} />
      <Route path="/login" element={<Login setUserData={setUserData} />} />

      {/* ADMIN */}
      {checkRole(userRole, "ROLE_ADMIN") && (
        <Route path="/admin" element={<AdminPage />} />
      )}
      {checkRole(userRole, "ROLE_ADMIN") && (
        <Route path="/admin/account" element={<AccountList />} />
      )}
      {checkRole(userRole, "ROLE_ADMIN") && (
        <Route path="/admin/member" element={<MemberList />} />
      )}
      {checkRole(userRole, "ROLE_ADMIN") && (
        <Route path="/admin/employee" element={<EmployeeList />} />
      )}

      {/* USER */}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/" element={<Dashboard />} />
      )}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/detail" element={<Detail />} />
      )}

      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/gym" element={<Gym />} />
      )}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/football" element={<Football />} />
      )}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/blog" element={<Blog />} />
      )}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/sport" element={<Sport />} />
      )}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/payment_information" element={<PaymentInformation />} />
      )}

      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/pricing" element={<Pricing />} />
      )}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/api/payment/payment_infor" element={<PaymentSuccess />} />
      )}
      {checkRole(userRole, "ROLE_USER") && (
        <Route path="/body" element={<MuscleBody />} />
      )}
    </Routes>
  );
};

export default App;
