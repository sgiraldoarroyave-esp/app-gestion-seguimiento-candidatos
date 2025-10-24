import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";
import Dashboardd from "../pages/dashboardd/Dashboardd";

export let RouterApp = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/dashboardd",
    element: <Dashboardd />
  }
];
