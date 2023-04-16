import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
const publicRoutes = [
  {
    path: "/",
    component: Dashboard,
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
