// components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";

function Layout  () {
  return(
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  
  )
}

export default Layout;
