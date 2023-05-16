import { Route, Routes } from "react-router-dom";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../src/user";
import authProvider from "./authProvider";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Gym from "./components/Customer/Gym/Gym";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import MemberList from "../src/MemberList";
import AdminPage from "./components/Admin/AdminPage/AdminPage";
import Pricing from "./components/Pricing/Pricing";
import MemberList from "../src/components/Admin/Member/MemberList";
import EmployeeList from "../src/components/Admin/Employee/EmployeeList";
import Sidebar from "./components/Sidebar/Sidebar";
import Blog from "./components/Blog/Blog";
import Football from "./components/Football/Football";
import Time from "./components/Time/Time";
import Payment from "./components/Payment/Payment";
import Sport from "./components/Customer/Sport/Sport";
import ClassDetail from "./components/Customer/ClassDetail/ClassDetail";
import ClassList from "./components/Customer/ClassDetail/ClassDetail";
import Navbar from "./components/NavBar/NavBar";
const dataProvider = jsonServerProvider("http://localhost:9000");
export default function App() {
  const [username, setUsername] = useState("");

  return (
    <Routes>
      {/* customer */}
      <Route path="/nav" element={<Navbar username={username} />} />
      <Route path="/login" element={<Login setUsername={setUsername} />} />
      <Route path="/" element={<Dashboard username={username} />} />
      <Route path="/gym" element={<Gym />} />

      <Route path="/register" element={<Register />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/payment" element={<Payment />} />
      {/*  */}
      <Route path="/sport" element={<Sport />} />
      <Route path="/club" element={<ClassList />} />
      <Route path="/class/:sportName" component={ClassDetail} />
      {/* admin */}
      <Route path="/member" element={<MemberList />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/employee" element={<EmployeeList />} />
      <Route path="/football" element={<Football />} />
      <Route path="/time" element={<Time />} />

      {/* <Route path="/admin/*" element={<AdminLayout />} />
    <Route path="/member/*" element={<AdminLayout />} /> */}
    </Routes>
  );
}

// const AdminLayout = () => (
//   <Admin dataProvider={dataProvider} authProvider={authProvider}>
//     <Resource name="member" list={MemberList} />
//   </Admin>
// );
