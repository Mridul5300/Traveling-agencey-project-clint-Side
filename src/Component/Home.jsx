import { useLoaderData } from "react-router-dom";
import AllTouristCard from "./AllTouristSpot/AllTouristCard";
import Banner from "./Banner";
import HomeCard from "./Homecard/HomeCard";



const Home = () => {
     
     const AllCards = useLoaderData()
          

     return (
          <div>
               <Banner></Banner>
               <div className="grid md:grid-cols-3 grid-cols-1 space-y-4  mt-10">
                    {
                         AllCards.slice(0,6).map(card => <HomeCard key={card._id} card={card}></HomeCard>)
                    }
               </div>
          </div>
     );
};

export default Home;