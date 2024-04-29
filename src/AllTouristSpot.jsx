import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllTouristSpot = () => {
    const spots = useLoaderData();
    const [order, setOrder] = useState(spots);



    console.log(order)

    const handleSort = (sortType) => {
        let sortedSpots = [...order]; 
        if (sortType === 'Ascending') {
            sortedSpots.sort((a, b) => a.cost - b.cost);
        } else if (sortType === 'Descending') {
            sortedSpots.sort((a, b) => b.cost - a.cost);
        }
        setOrder(sortedSpots); 
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSort("Ascending")}><a>Ascending Order</a></li>
                        <li onClick={() => handleSort("Descending")}><a>Descending Order</a></li>
                    </ul>
                </div>
            </div>
            {
                order.map(spot => (
                    <div key={spot._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={spot.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{spot.spot}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllTouristSpot;
