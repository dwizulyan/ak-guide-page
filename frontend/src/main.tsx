import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import "@/theme";
import "@/fonts";

import App from "@/App";
import ErrorPage from "@/components/error/ErrorPage";
import Home from "@/routes/home/Home";
import Stages from "@/routes/guides/stages/Stages";
import View from "@/routes/view/View";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "guide/stages",
        element: <Stages />,
      },
      {
        path: "view",
        element: <View />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
