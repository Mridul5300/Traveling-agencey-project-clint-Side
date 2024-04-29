import { useLoaderData } from "react-router-dom";
import AllTouristCard from "./AllTouristCard";


const AllTouristSpot = () => {
     const allCard = useLoaderData()
     return (
          <div>
               <h2 className="4xl">All Turist Sport:{allCard.length}</h2>
               <div className="grid md:grid-cols-3 grid-cols-1 space-y-4 -space-x-2 mt-2">
               {
                    allCard.map(card => <AllTouristCard key={card._id} card={card}></AllTouristCard> )
               }
               </div>
               
          </div>
     );
};

export default AllTouristSpot;