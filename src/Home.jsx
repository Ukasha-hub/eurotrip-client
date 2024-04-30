
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








const Home = () => {
    
   
   const spots= useLoaderData()
   const [firstSixSpots, setFirstSixSpots] = useState(spots.slice(0, 6));
   //console.log(setFirstSixSpots)


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
             
             <div className='border-b-8'>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-start'>Your Next Tour </h1>
             </div>

             <div className='grid grid-cols-3'>
             {
                        firstSixSpots.map(spot => (
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
                        ))
                    }
             </div>


             <div className='border-b-8'>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center'>Lets Go to.... </h1>
             </div>

              <div className='grid grid-cols-3'>
                {
                    country.map(country=>
                        <div key={country._Id}>
                              <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src={country.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{country.name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/countries/${country._id}`}><button className="btn btn-primary">See tourist spots</button></Link>
                                    
                                    </div>
                                </div>
                                </div>
                        </div>
                        )
                }
              </div>
             

            
              
        </div>
    );
};

export default Home;