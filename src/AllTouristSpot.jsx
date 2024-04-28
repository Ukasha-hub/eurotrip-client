import { useLoaderData } from "react-router-dom";



const AllTouristSpot = () => {
    const spots =useLoaderData();
    

    return (
        <div>
             <h1>Spots:{spots.length}</h1>
            {
                spots.map(spot=>
                    
                    <>
                    
                      
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={spot.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{spot.spot}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    </div>
                        
                   </>
                )
            }
            
        </div>
    );
};

export default AllTouristSpot;