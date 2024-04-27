import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Foteer/Footer";


const Root = () => {
     return (
          <div>
               <div className="max-w-6xl mx-auto">
               <NavBar></NavBar>
               <Outlet></Outlet>
               <Footer></Footer>
               </div>
          </div>
     );
};

export default Root;