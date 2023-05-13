import { Route, Routes } from "react-router-dom";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../src/user";
import authProvider from "./authProvider";

import Dashboard from "./components/Dashboard/Dashboard";
import Gym from "./components/Gym/Gym";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import MemberList from "../src/MemberList";
import AdminPage from "./components/Admin/AdminPage/AdminPage";
import Pricing from "./components/Pricing/Pricing";
import MemberList from "../src/components/Admin/Member/MemberList";
import EmployeeList from "../src/components/Admin/Employee/EmployeeList";
const dataProvider = jsonServerProvider("http://localhost:9000");

const App = () => (
  <Routes>
    {/* customer */}
    <Route path="/" element={<Dashboard />} />
    <Route path="/gym" element={<Gym />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/pricing" element={<Pricing />} />

    {/* admin */}
    <Route path="/member" element={<MemberList />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/employee" element={<EmployeeList />} />

    {/* <Route path="/admin/*" element={<AdminLayout />} />
    <Route path="/member/*" element={<AdminLayout />} /> */}
  </Routes>
);

// const AdminLayout = () => (
//   <Admin dataProvider={dataProvider} authProvider={authProvider}>
//     <Resource name="member" list={MemberList} />
//   </Admin>
// );

export default App;
