import PropTypes from 'prop-types';

const AllTouristCard = ({card}) => {
          const{ name, email, cuntryname, spotname, averagecost, season, photo,traveltime,totaVisitors,description,location}=card;
     return (
          <div>
               <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                         <div className="space-y-2">
                              <h2 className="text-3xl font-semibold tracking-wide">{cuntryname}</h2>
                              <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                         </div>
                         <button type="button" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
               </div>
          </div>
     );
};

AllTouristCard.propTypes = {
     card: PropTypes.object
   };

export default AllTouristCard;