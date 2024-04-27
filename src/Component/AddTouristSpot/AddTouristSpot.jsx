

const AddTouristSpot = () => {


     const handleAddCoffee = event => {
          event.preventDefault();
          

          const form = event.target;

          
          const name = form.name.value;
          const country = form.country.value;
          const supplier = form.supplier.value;
          const taste = form.taste.value;
          const category = form.category.value;
          const details = form.details.value;
          const photo = form.photo.value;

          const AddNewSpot = {name,country,supplier,taste,category,details,photo}
          console.log(AddNewSpot);
     }
     return (
          <div>
               <section className=" bg-[#F4F3F0]  mx-auto p-24">
               <div className="text-center">
               <p className="font-medium  text-3xl">Add New Spot</p>
               </div>
                    <form onSubmit={handleAddCoffee} className="container  mt-3">
                         <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3  mx-auto ">
                              <div className="col-span-full sm:col-span-3 ">
                                   <label htmlFor="firstname" className="text-sm">Name</label>
                                   <input name="name" type="text" placeholder="Enter your spot name" className=" input input-bordered w-full text-black border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="country" className="text-sm">Country Name</label>
                                   <input  name="country " type="text" placeholder="Enter Country Name" className="  input input-bordered w-full text-black  border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="supplier" className="text-sm">Supplier</label>
                                   <input  type="text" name="supplier" placeholder="Enter coffee supplier" className="  input input-bordered w-full   text-black  border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="taste" className="text-sm">Taste</label>
                                   <input  type="text" name="taste" placeholder="Enter coffee taster" className=" input input-bordered w-full  text-black border-gray-300" />
                              </div>

                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="category" className="text-sm">Category</label>
                                   <input type="text" name="category" placeholder="Enter coffee category" className=" input input-bordered w-full  text-black border-gray-300" />
                              </div>
                              <div className="col-span-full sm:col-span-3">
                                   <label htmlFor="details" className="text-sm">Details</label>
                                   <input  type="text" name="details" placeholder="Enter coffee details" className=" input input-bordered w-full text-black border-gray-300" />
                              </div>

                         </div>
                         <div className="col-span-full ">
					<label htmlFor="address" className="text-sm">Photo</label>
					<input  type="text" name="photo" placeholder="Enter PhotoUrl" className= "  input input-bordered w-full text-black  border-gray-300" />
				</div>
                <input type="submit" value="Add Spot" className="btn btn-block bg-[#D2B48C] mt-5" />
                    </form>
               
               </section>
          </div>
     );
};

export default AddTouristSpot;