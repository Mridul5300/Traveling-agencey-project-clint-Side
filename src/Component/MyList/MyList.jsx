import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MyList = () => {
     const { user } = useContext(AuthContex)
     const [details, setDetails] = useState([]);

     useEffect(() => {
          fetch(`http://localhost:5000/card/${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    setDetails(data)
               })
     }, [user])

     const handleDelete = _id => {
          console.log(_id);
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
             }).then((result) => {
               if (result.isConfirmed) {
               //   Swal.fire({
               //     title: "Deleted!",
               //     text: "Your file has been deleted.",
               //     icon: "success"
               //   });
               // console.log('dellet cofirmed');
               fetch(`http://localhost:5000/card/${_id}`, {
                    method:'DELETE'
               })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                     Swal.fire({
                   title: "Deleted!",
                   text: "Your card has been deleted.",
                   icon: "success"
                 });
                    }
               })
               }
             });

     }
     return (
          <div>
               <h3 className="text-4xl">My List:{details.length}</h3>
               <div className="overflow-x-auto">
                    <table className="table">
                         <thead>
                              <tr>
                                   <th>
                                        
                                   </th>
                                   <th>Country</th>
                                   <th>Spot Name</th>
                                   <th>Average Cost</th>
                              </tr>
                         </thead>
                         <tbody>
                              {/* row 1 */}
                              {
                                   details.map( detail => 
                                   <tr key={detail._id}>
                                        <th>
                                             
                                        </th>
                                        <td>
                                             <div className="flex items-center gap-3">
                                                  <div className="avatar">
                                                       <div className="mask mask-squircle w-12 h-12">
                                                            <img src={detail.photo} alt="Avatar Tailwind CSS Component" />
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="font-bold">{detail.cuntryname}</div>
                                                  </div>
                                             </div>
                                        </td>
                                        <td>
                                             
                                             <span className="badge badge-ghost badge-sm">{detail.spotname}</span>
                                        </td>
                                        <td>{detail.averagecost}</td>
                                        <th>
                                             <Link  to={`/updatedata/:${detail._id}`}>
                                             <button className="btn btn-link btn-md ">Update</button>
                                             </Link> 
                                             <button
                                             onClick={() => handleDelete (detail._id)} 
                                             className="btn btn-warning">Dellete</button>
                                        </th>
                                   </tr>)
                              }
                         </tbody>
                    </table>
               </div> 
          </div>
     );
};

export default MyList;
// to={`/update/:${detail._id}`}