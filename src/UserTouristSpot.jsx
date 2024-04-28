import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

import Swal from 'sweetalert2'

const UserTouristSpot = () => {
    const spots =useLoaderData();
    const {user}= useContext(AuthContext)

    const handleDelete= id=>{
      console.log(id)
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
          
          fetch(`http://localhost:5000/touristSpot/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
    
                
              });
            }
          })
        }
      });
    }
    
    return (
      <div>
         <h1>spots: {spots.length}</h1>

         <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        
        <th>
            Actions
        </th>
      </tr>
    </thead>
    <tbody>

   {
    spots.map((spot)=>(
        <>
        {
            spot.email===user.email?(
                <tr>
                
                <td><img className="w-40" src={spot.photo} alt="" /> </td>
                <td>{spot.spot}</td>
                <td>Blue</td>
                <td>
            <div className="flex flex-col">
                <button className="btn ">View Details</button>
                <Link to={`updateSpot/${spot._id}`}></Link>
                <button className="btn">Edit</button>
                <button onClick={()=> handleDelete(spot._id)} className="btn">Delete</button>
            </div>
        </td>
              </tr>
            ):(
                <p></p>
            )
        }
        </>
    ))
   }

     
      
     
    </tbody>
  </table>
</div>
      
      </div>  
      
    );
};

export default UserTouristSpot;