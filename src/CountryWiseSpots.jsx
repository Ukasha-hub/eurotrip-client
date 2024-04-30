import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ImPriceTag } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";

const CountryWiseSpots = () => {
    const country= useLoaderData();

    const [spots, setSpots]= useState([]);
    
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        setLoading(false);
    }, [spots]);
    

    useEffect(()=> {
        fetch("http://localhost:5000/touristSpot")
        .then(res => res.json())
        .then(data=> setSpots(data))
    }, [])
    return (
        <div>
            <div className="flex justify-center mt-5">
                        
                        <h1 className="text-5xl">{country.name}</h1>
                    </div>
            <div className="grid  grid-cols-1 justify-center content-center justify-items-center gap-7 text-black p-5">
            {
                spots.map(spot=>
                    <>
                    {
                        !loading?(
                            <div >

{
                country.name===spot.country?(<div>
                    
                    {
                        
                           
                        <div key={spot._id} className="card card-compact w-96 lg:w-[800px] bg-gray-300 border-2 shadow-xl">
                        <figure><img className='h-[300px]' src={spot.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-center text-3xl">{spot.spot}</h2>
                            <div className="border-2 rounded-xl flex flex-col justify-center content-center justify-items-center items-center gap-3 p-3 text-lg">
                            <div className="flex flex-row">
                            <ImPriceTag />
                            <p>Average Cost: {spot.cost}</p>
                            </div>
                            <div className="flex flex-row">
                            <FaUserGroup />
                            <p>Total Visitors/Year: {spot.visitor}</p>
                            </div>
                            <div className="flex flex-row"> 
                            <FaPlaneCircleCheck />
                            <p>Travel Time: {spot.time}</p>
                            </div>
                            <div className="flex flex-row">
                            <FaCloudSun />
                            <p>Seasonality: {spot.seasonality}</p>
                            </div>
                            </div>
                            <div className="card-actions justify-center">
                                
                                <Link to={`/details/${spot._id}`}><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>
                            
                        
                    }
                </div>):(<p></p>)
            }
                           
                            </div>
                        ):(<span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>)
                    }
                    </>
                )
            }
            </div>
            
        </div>
    );
};

export default CountryWiseSpots;