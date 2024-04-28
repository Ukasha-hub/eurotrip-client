import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

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

        fetch('http://localhost:5000/touristSpot',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })

        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleAddSpot} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tourists spot name</span>
          </label>
          <input type="text" name='spot' placeholder="spot" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input type="text" name='country' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name='location' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="text" name='description' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Average Cost</span>
          </label>
          <input type="text" name='cost' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seasonality</span>
          </label>
          <input type="text" name='seasonality' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Travel Time</span>
          </label>
          <input type="text" name='time' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Total Vistors per Year</span>
          </label>
          <input type="text" name='visitor' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' value={user.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
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