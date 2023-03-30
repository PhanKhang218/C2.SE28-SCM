import Dashboard from "../components/Dashboard/Dashboard";
import GetStarted from "../components/GetStarted/GetStarted";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
const publicRoutes = [
  {
    path: "/",
    component: Dashboard,
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "get-started", component: GetStarted },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
