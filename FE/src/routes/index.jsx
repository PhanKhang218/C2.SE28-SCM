import Dashboard from "../components/Dashboard/Dashboard";
import Football from "../components/Football/Football";
import Gym from "../components/Gym/Gym";
import Login from "../components/Login/Login";
import Payment from "../components/Payment/Payment";
import Pricing from "../components/Pricing/Pricing";
import Register from "../components/Register/Register";
import Time from "../components/Time/Time";
const publicRoutes = [
  {
    path: "/",
    component: Dashboard,
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/pricing", component: Pricing },
  { path: "/time", component: Time },
  { path: "/fb", component: Football },
  { path: "/payment", component: Payment },
  { path: "/gym", component: Gym },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
