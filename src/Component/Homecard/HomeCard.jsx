import { Link } from "react-router-dom";


const HomeCard = ({card}) => {
     const{  cuntryname, spotname, averagecost, season, photo,traveltime,totaVisitors,description,location}=card;
     return (
          <div>
               {/* <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                         <div className="space-y-2">
                              <h2 className="text-3xl font-semibold tracking-wide">{cuntryname}</h2>
                              <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                         </div>
                         <button type="button" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
                    </div>
               </div> */}
                <section className="mt-5 mb-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="border p-4 shadow-xl rounded-lg">
        <div className="relative">
          <img alt="" className="object-cover w-full h-60 rounded-t-lg" src={photo} />
          <span className="absolute top-0 right-0 px-3 py-1 bg-red-400 text-white rounded-bl-lg">  </span>
        </div>
        <div className="flex flex-col justify-between h-full py-4">
          <h3 className="text-lg font-semibold mb-2">{}</h3>
          <div className="flex flex-wrap justify-between mb-4">
            <span className="bg-green-300 rounded-md p-2 flex items-center"><strong></strong> {}</span>
            <span className="bg-green-300 rounded-md p-2 flex items-center"><strong></strong> {}</span>
          </div>
     
               <hr />
          

          
          <div className='mt-auto'>
            <Link className="block w-full px-5 py-3 text-center text-black hover:text-gray-200 bg-green-300 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300">
              View Property
            </Link>
          </div>
        </div>
      </div>
                </section>
          </div>
     );
};

export default HomeCard;