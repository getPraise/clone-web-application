import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../component/Pages/Home";
import Login from "../component/Pages/Login";
import SignUp from "../component/signUp/SignUp"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />
    }
  ]
);

function AppRouter() {


  return (
    < div >
      <RouterProvider router={router} />
    </div >
  )
}

export default AppRouter;
