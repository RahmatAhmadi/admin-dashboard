import { useState } from "react";
import Navbar from "../global/Navbar";
import Sidebar from "../global/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      <Sidebar setIsSidebar={setIsSidebar} />
      <main className="content">
        <Navbar isSidebar={isSidebar} />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
