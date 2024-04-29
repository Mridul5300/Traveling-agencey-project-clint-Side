import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home";
import AllTouristSpot from "../Component/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../Component/AddTouristSpot/AddTouristSpot";
import Registar from "../Component/Register/Registar";
import MyList from "../Component/MyList/MyList";
import Login from "../Component/Login/Login";
import Error from "../Component/Error/Error";
import Upadate from "../Component/MyList/Upadate";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch ('http://localhost:5000/card')
      },
      {
        path:"allspot",
        element:<AllTouristSpot></AllTouristSpot>,
        loader: () => fetch ('http://localhost:5000/card')
      },
      {
        path:'addspot',
        element:<AddTouristSpot></AddTouristSpot>,
      },
      {
        path:"register",
        element:<Registar></Registar>
      },
      {
        path:'mylist',
        element:<MyList></MyList>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'updatedata/:id',
        element:<Upadate></Upadate>,
        // loader:({params}) => fetch(`http://localhost:5000/card/${params.id}`)
      }
    ]
  },
]);

export default router