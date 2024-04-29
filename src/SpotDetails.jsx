import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {
    const spot= useLoaderData()
    return (
        <div>

            <h1>Name:{spot.spot}</h1>
            
        </div>
    );
};

export default SpotDetails;