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
import PrivetRoute from "../Component/Privet Route/PrivetRoute";
import CardDetail from "../Component/CardDetails/CardDetail";



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
        element:<PrivetRoute><AllTouristSpot></AllTouristSpot></PrivetRoute>,
        loader: () => fetch ('http://localhost:5000/card')
      },
      {
        path:'addspot',
        element:<PrivetRoute><AddTouristSpot></AddTouristSpot></PrivetRoute>
      },
      {
        path:"register",
        element:<Registar></Registar>
      },
      {
        path:'mylist',
        element:<PrivetRoute><MyList></MyList></PrivetRoute>,
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'/updatedata/:id',
        element:<PrivetRoute><Upadate></Upadate></PrivetRoute>,
        loader:({params}) => fetch(`http://localhost:5000/cards/${params.id}`)
      },
      {
        path:'/carddetail/:id',
        element:<CardDetail></CardDetail>,
        loader:({params}) => fetch(`http://localhost:5000/cards/${params.id}`),
      }
    ]
  },
]);

export default router