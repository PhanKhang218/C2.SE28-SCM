import { Route, Routes } from "react-router-dom";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../src/user";
import authProvider from "./authProvider";

import Dashboard from "./components/Dashboard/Dashboard";
import Gym from "./components/Gym/Gym";
import Login from "./components/Login/Login";
// import MemberList from "../src/MemberList";

import Pricing from "./components/Pricing/Pricing";
import MemberList from "../src/components/Admin/Member/MemberList";
const dataProvider = jsonServerProvider("http://localhost:9000");

const App = () => (
  <Routes>
    {/* customer */}
    <Route path="/" element={<Dashboard />} />
    <Route path="/gym" element={<Gym />} />
    <Route path="/login" element={<Login />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/member" element={<MemberList />} />

    {/* admin */}
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
