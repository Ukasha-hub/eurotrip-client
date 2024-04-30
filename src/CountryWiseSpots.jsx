import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';

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
            <div className="flex justify-center">
                        
                        <h1>{country.name}</h1>
                    </div>
            {
                spots.map(spot=>
                    <>
                    {
                        !loading?(
                            <div>

{
                country.name===spot.country?(<div>
                    
                    {
                        
                            <div key={spot._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={spot.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{spot.spot}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        
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
    );
};

export default CountryWiseSpots;