import { useLoaderData } from "react-router-dom";
import AllTouristCard from "./AllTouristCard";


const AllTouristSpot = () => {
     const allCard = useLoaderData()
     return (
          <div>
               <h2 className="4xl">All Turist Sport:{allCard.length}</h2>
               {
                    allCard.map(card => <AllTouristCard key={card._id} card={card}></AllTouristCard> )
               }
          </div>
     );
};

export default AllTouristSpot;