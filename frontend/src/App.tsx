import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen dark:bg-neutral-950 bg-neutral-50">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;
