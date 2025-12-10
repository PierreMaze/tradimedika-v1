// tradimedika-v1/src/layout/LayoutApp.jsx
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function LayoutApp() {
  return (
    <div className="bg-light dark:bg-dark flex h-screen flex-col items-center justify-between transition duration-300 ease-in-out">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutApp;
