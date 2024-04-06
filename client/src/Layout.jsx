import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen px-4 flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
