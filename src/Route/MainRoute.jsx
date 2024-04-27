import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home";
import AllTouristSpot from "../Component/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../Component/AddTouristSpot/AddTouristSpot";
import Registar from "../Component/Register/Registar";
import MyList from "../Component/MyList/MyList";
import Login from "../Component/Login/Login";
import Error from "../Component/Error/Error";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/all spot",
        element:<AllTouristSpot></AllTouristSpot>,
      },
      {
        path:'/add spot',
        element:<AddTouristSpot></AddTouristSpot>,
      },
      {
        path:"/register",
        element:<Registar></Registar>
      },
      {
        path:'/my list',
        element:<MyList></MyList>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);

export default router