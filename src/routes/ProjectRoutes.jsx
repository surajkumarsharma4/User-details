import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import LandingPage from "../Pages/LandingPage";
import HomePages from "../Pages/HomePages";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Users from "../components/Users";
import Allusers from "../components/Allusers";
import CreateUser from "../components/CreateUser";
import Update from "../components/Update";
import ViewMore from "../components/ViewMore";

export let ProjectRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/users",
        element: <Users />,
        children: [
          {
            path: "/users",
            element: <Allusers />,
          },
          {
            path: "/users/createusers",
            element: <CreateUser />,
          },
          {
            path: "/users/updateusers",
            element: <Update />,
          },
          {
            path: "/users/view",
            element: <ViewMore />,
          },
        ],
      },
      {
        path: "/home",
        element: <HomePages />,
        children: [
          {
            path: "/home/login",
            element: <Login />,
          },
          {
            path: "/home/register",
            element: <Register />,
          },
          {
            path: "/home/about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);
