import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddTouristSpot = () => {
     const {user}=useContext(AuthContex)
     const handleAddCoffee = event => {
          event.preventDefault();


          const form = event.target;


          const name = user?.displayName;
          console.log(name);
          const email = user?.email;
          const cuntryname = form.cuntryname.value;
          const spotname = form.spotname.value;
          const averagecost = form.averagecost.value;
          const season = form.season.value;
          const photo = form.photo.value;
          const  traveltime =  form.traveltime.value;
          const totaVisitors = form.totaVisitors.value;
          const description = form.description.value;
          const location = form.location.value;
          const AddNewSpot = { name, email, cuntryname, spotname, averagecost, season, photo,traveltime,totaVisitors,description,location}
          console.log(AddNewSpot);



          // send data to the user 
          fetch('http://localhost:5000/card', {
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(AddNewSpot)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               if(data.insertedId){
                    Swal.fire({
                         title: 'Success!',
                         text: 'User Added Succesfully',
                         icon: 'success',
                         confirmButtonText: 'Cool'
                       })
               }
          })
     }
     return (
          <div>
               <section className=" bg-[#F4F3F0]  mx-auto p-24  mb-5">
                    <div className="text-center">
                         <p className="font-medium  text-3xl">Add New Spot</p>
                    </div>
                    <form onSubmit={handleAddCoffee} className="container  mt-3">
                         <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3  mx-auto ">
                              <div className="col-span-full sm:col-span-3 ">
                                   <label htmlFor="firstname" className="text-sm">Name</label>
                                   <input name="name" readOnly defaultValue={user?.displayName} type="text" placeholder="Enter your spot name" className=" input input-bordered w-full text-black border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="email" className="text-sm">Email</label>
                                   <input name="email" readOnly defaultValue={user?.email} type="email" placeholder="Enter Your Mail" className="  input input-bordered w-full text-black  border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="Country Name" className="text-sm">Country Name</label>
                                   <input type="text" name="cuntryname" placeholder="Enter Your Country Name" className="  input input-bordered w-full   text-black  border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="Spot Name" className="text-sm">Tourist Spot Name</label>
                                   <input type="text" name="spotname" placeholder="tourist spot" className=" input input-bordered w-full  text-black border-gray-300" />
                              </div>

                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="Average Cost" className="text-sm">Average Cost</label>
                                   <input type="text" name="averagecost" placeholder="total cost" className=" input input-bordered w-full  text-black border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="season" className="text-sm">Season</label>
                                   <input type="text" name="season" placeholder="Enter Season" className=" input input-bordered w-full text-black border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3 ">
                              <label htmlFor="address" className="text-sm">Photo</label>
                              <input type="text" name="photo" placeholder="Enter PhotoUrl" className="  input input-bordered w-full text-black  border-gray-300" />
                         </div>
                         <div className="col-span-full sm:col-span-3 ">
                              <label htmlFor="Location" className="text-sm">Location</label>
                              <input type="text" name="location" placeholder="Enter Location" className="  input input-bordered w-full text-black  border-gray-300" />
                         </div>
                         <div className="col-span-full sm:col-span-3 ">
                              <label htmlFor="Travel time" className="text-sm">Travel time</label>
                              <input type="text" name="traveltime" placeholder="tavel time" className="  input input-bordered w-full text-black  border-gray-300" />
                         </div>
                         <div className="col-span-full sm:col-span-3 ">
                              <label htmlFor="totaVisitors" className="text-sm">Total Visitors</label>
                              <input type="text" name="totaVisitors" placeholder="total visit" className="  input input-bordered w-full text-black  border-gray-300" />
                         </div>
                         </div>
                         <div>
                         <h2 className="mt-3">Description</h2>
                         <textarea type="text" name='description' placeholder="Description" className="textarea mt-6 textarea-bordered textarea-lg w-5/6" ></textarea>
                         </div>
                         <input type="submit" value="Add Spot" className="btn btn-block bg-[#D2B48C] mt-5" />
                    </form>
               </section>
          </div>
     );
};

export default AddTouristSpot;

// . image ( use image URL)
// b. tourists_spot_name
// c. country_Name
// d. location
// e. short description
// f. average_cost
// g. seasonality - like summer, winter
// h. travel_time => like- 7 days
// i. totaVisitorsPerYear => like- 10000
// j. User Email
// k. User Name
// l. “Add” button

// image
// b. tourists_spot_name
// c. average_cost
// d. totaVisitorsPerYear
// e. travel_time
// f. seasonality
// g. “View season” button – will redirect to the “View season Page”
// {class.slice(o,6).map}