import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
          <div className=" min-h-screen">
          <Outlet></Outlet>
          </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;