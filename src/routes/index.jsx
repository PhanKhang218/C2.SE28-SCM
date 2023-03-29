import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
const publicRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  { path: "/login", component: Login },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
