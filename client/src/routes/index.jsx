import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
