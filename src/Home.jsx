
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ImPriceTag } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";








const Home = () => {
    
   
   const spots= useLoaderData()
   const [firstSixSpots, setFirstSixSpots] = useState(spots.slice(0, 6));
   console.log(setFirstSixSpots)


   const [country, setCountry]= useState([]);

    

    useEffect(()=> {
        fetch("http://localhost:5000/countries")
        .then(res => res.json())
        .then(data=> setCountry(data))
    }, [])

    //console.log(country)
   
   

    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper lg:h-[700px]"
                >
                    <SwiperSlide >
                      
                        <img className='w-full h-30 ' src="https://as2.ftcdn.net/v2/jpg/02/68/79/39/1000_F_268793912_Nh8Ukq7WrDPWJ2RuRKyiM0ITG75yPeHc.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>

                        <img className='w-full h-30 '  src="https://cdn3.vectorstock.com/i/1000x1000/97/27/travel-to-europe-time-banner-vector-23719727.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide>

                        <img className='w-full h-30 ' src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1703/mikalaimanyshau170300137/74105878-travel-to-europe-road-trip-tourism-open-book-with-landmarks-europe-travel-guide-advertising-web.jpg" alt="" /></SwiperSlide>
                    
                    
                </Swiper>
            </>
             
             <div className='border-b-2'>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-start'>Your Next Tour </h1>
             </div>

             <div className='grid lg:grid-cols-3  grid-cols-1 gap-2 justify-center content-center justify-items-center p-5'>
             {
                        firstSixSpots.map(spot => (
                            <div key={spot._id} className="card card-compact w-[400px] bg-base-100 border-2 shadow-xl">
                                <figure><img className='h-[300px]' src={spot.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl">{spot.spot}</h2>
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
                        ))
                    }
             </div>


             <div className='border-b-2'>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center'>Lets Go to.... </h1>
             </div>

              <div className='grid lg:grid-cols-3  grid-cols-1 gap-2 justify-center content-center justify-items-center p-5'>
                {
                    country.map(country=>
                        <div key={country._Id}>
                              <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img className='h-[100px]' src={country.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{country.name}</h2>
                                    <p>{country.description}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/countries/${country._id}`}><button className="btn btn-primary">See tourist spots</button></Link>
                                    
                                    </div>
                                </div>
                                </div>
                        </div>
                        )
                }
              </div>


              <div className=''>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center'>Contact Us </h1>
             </div>


              <div className="p-4 flex justify-center   border-2 bg-white mx-10" style={{backgroundImage:"url('https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714348800&semt=ais')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                <form action="" className="font-bold h-[100%]" >
                  <div className="flex lg:flex-row flex-col lg:gap-[5%] ">
                    <div className="lg:w-[50%]">
                      <h1 className='text-black' >Name</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder=""/>
                    </div>
                    <div className="lg:w-[50%]">  
                      <h1 className="mt-5 lg:mt-0 text-black ">Your Email</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder=""/>
                    </div>
                  </div>  
                  <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className="lg:w-[50%]">
                      <h1 className="mt-5 lg:mt-10 text-black">Subject</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder="e"/>
                    </div>
                    <div className="lg:w-[50%]">  
                      <h1 className="mt-5 lg:mt-10 text-black">Phone Number</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder="" />
                    </div>
                  </div>  
                  
                    <h1 className="mt-5 text-black">Message</h1>
                    <textarea className="w-[100%] h-40 mt-2 textarea textarea-bordered" type="text" placeholder=""></textarea>
                    <button className="btn bg-blue-500 text-white px-[30px] py-[15px] w-[100%] mt-5">Send Messege</button>
                  </form>
                  
                </div>


                <div className=" rounded-lg text-center bg-gray-200 text-black items-center " >
              <h1 className="text-xl font-extrabold">Social Media</h1>
              <ul className="flex justify-center gap-10 mt-5">
                <li><i className="fa-brands fa-twitter fa-2xl"></i></li>
                <li><i className="fa-brands fa-facebook fa-2xl"></i></li>
                <li><i className="fa-brands fa-instagram fa-2xl"></i></li>
                <li><i className="fa-brands fa-github fa-2xl"></i></li>
              </ul>
            </div>
             

            
              
        </div>
    );
};

export default Home;