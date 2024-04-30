// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
const CardDetail = () => {
     const viewDetail = useLoaderData()
     console.log(viewDetail);
     const{ _id , cuntryname, spotname, averagecost, season, photo,traveltime,totaVisitors}=viewDetail;
     // const {id}= useParams()
     // console.log(id);
     // const [viewDetail, setViewDetail] = useState()
          // useEffect(() => {
          //      fetch(`http://localhost:5000/carddetails/${id}`)
          //      .then(res => res.json())
          //      .then( data => {
          //           console.log(data);
          //           setViewDetail(data)
          //      })
          // },[id])
          // const {photo}=viewDetail;
          
     return (
          <div>
               <div className="card lg:card-side bg-base-100 shadow-xl mb-4 mt-2">
                    <div className="relative flex flex-col md:flex-row">
                         <div className="w-full md:w-1/2">
                              <img alt="" className="object-cover w-full h-64 md:h-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none" src={photo} />
                              <span className="absolute top-0 right-0 px-3 py-1 bg-red-400 text-white rounded-bl-lg"></span>
                         </div>
                         <div className="card-body p-6 flex flex-col justify-between">
                              <div>
                                   <h2 className="card-title text-3xl mb-4">{cuntryname}</h2>
                                   <h2 className="card-title text-3xl mb-2"></h2>
                                   <p className="text-lg mb-4"></p>
                                   <div className="flex justify-between mb-4">
                                        <div className="flex items-center">
                                         <span className="mr-4"></span>
                                         <span className="mr-4"></span>
                                              <span></span>
                                        </div>
                                        <div>
                                             <span className="bg-green-300 rounded-md p-2 text-sm font-semibold mr-2"></span>
                                             <span className="bg-green-300 rounded-md p-2 text-sm font-semibold"></span>
                                        </div>
                                   </div>
                                   
                              </div>
                              <h2 className="text-lg font-semibold"></h2>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CardDetail;