import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import "@/theme";
import "@/fonts";

import App from "@/App";
import ErrorPage from "@/components/error/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "guide/stages",
        element: <h1>Hello World</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
