import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

import Swal from 'sweetalert2'
const AddTouristSpot = () => {
    const {user}= useContext(AuthContext)




    const handleAddSpot= e=>{
        e.preventDefault()
        const form= e.target
        const photo= form.photo.value;
        const spot= form.spot.value;
        const country= form.country.value;
        const location= form.location.value;
        const description= form.description.value;
        const cost= form.cost.value;
        const seasonality= form.seasonality.value;
        const time= form.time.value;
        const visitor= form.visitor.value;
        const email= form.email.value;
        const name= form.name.value;
        const newTouristSpot= {photo, spot, country, location, description, cost, seasonality, time, visitor, email, name}
        //send data to mongodb

        fetch('https://10th-project-server.vercel.app/touristSpot',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })

        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: " Successful!",
                text: "You have added a Tourist spot!",
                icon: "success"
              });
              e.target.reset();
            }
            else {
              Swal.fire({
                  title: "Error!",
                  text: "Failed to add tourist spot!",
                  icon: "error"
              });
          }
            
            
        })
        .catch(error => {
          console.error('Error add tourist spot:', error);
          Swal.fire({
              title: "Error!",
              text: "Failed to add tourist spot!",
              icon: "error"
          });
      });
       
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Add a new Tourist Spot</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-lg  shadow-2xl bg-slate-700/50">
      <form onSubmit={handleAddSpot} className="card-body ">
        <div className="flex  flex-col">
          <div className="form-control  ">
          <label className="label">
            <span className="label-text-bold">PhotoURL</span>
          </label>
          <input type="text" name='photo' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Tourists spot name</span>
          </label>
          <input type="text" name='spot' placeholder="" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Country Name</span>
          </label>
          <input type="text" name='country' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Location</span>
          </label>
          <input type="text" name='location' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Short Description</span>
          </label>
          <textarea type="text" name='description' placeholder="" className="input input-bordered h-[200px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Average Cost</span>
          </label>
          <input type="text" name='cost' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Seasonality</span>
          </label>
          <input type="text" name='seasonality' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Travel Time</span>
          </label>
          <input type="text" name='time' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Total Vistors per Year</span>
          </label>
          <input type="text" name='visitor' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Email</span>
          </label>
          <input type="email" name='email' value={user.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Name</span>
          </label>
          <input type="text" name='name' value={user.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
 
</div>
    );
};

export default AddTouristSpot;