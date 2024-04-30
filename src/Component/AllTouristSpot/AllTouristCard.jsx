import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllTouristCard = ({card}) => {
     const{ _id, cuntryname, spotname, averagecost, season, photo,traveltime,totaVisitors}=card;
     return (
     <div>
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg dark:bg-gray-50 dark:text-gray-800">
      <img src={photo} alt="" className="object-cover w-full h-56 dark:bg-gray-500" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{cuntryname}</h2>
        <h3 className="text-lg font-semibold mb-2 text-gray-700">{spotname}</h3>
        <ul className="list-disc mb-4">
          <li><strong>Season:</strong> <span className="text-gray-700">{season}</span></li>
          <li><strong>Average Cost:</strong> <span className="text-gray-700">{averagecost}</span></li>
          <li><strong>Travel Time:</strong> <span className="text-gray-700">{traveltime}</span></li>
          <li><strong>Total Visitors:</strong> <span className="text-gray-700">{totaVisitors}</span></li>
        </ul>
        <Link  to={`/carddetail/${_id}`}>
          <button type="button" className="btn w-full py-3 font-semibold rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-colors duration-300">
            Read more
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

AllTouristCard.propTypes = {
     card: PropTypes.object
   };

export default AllTouristCard;