import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SignIn from './SignIn.jsx';
import AuthProvider from './AuthProvider.jsx';
import Register from './Register.jsx';
import AddTouristSpot from './AddTouristSpot.jsx';
import AllTouristSpot from './AllTouristSpot.jsx';
import UserTouristSpot from './UserTouristSpot.jsx';
import UpdateTouristSpot from './UpdateTouristSpot.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import SpotDetails from './SpotDetails.jsx';
import Home from './Home.jsx';
import CountryWiseSpots from './CountryWiseSpots.jsx';
import ErrorPage from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('https://10th-project-server.vercel.app/touristSpot')
      },

      {
        path: '/signIn',
        element: <SignIn></SignIn>
        
      },
      {
        path: '/register',
        element: <Register></Register>
        
      },
      {
        path: '/addSpot',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path:'/allSpot',
        element:<AllTouristSpot></AllTouristSpot>,
        loader: ()=> fetch('https://10th-project-server.vercel.app/touristSpot')
      },
      {
        path: '/userSpot',
        element: <PrivateRoute><UserTouristSpot></UserTouristSpot></PrivateRoute>,
        loader: ()=> fetch('https://10th-project-server.vercel.app/touristSpot')
      },
      {
        path:'/userSpot/updateSpot/:id',
        element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
        loader: ({params})=> fetch(`https://10th-project-server.vercel.app/touristSpot/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://10th-project-server.vercel.app/touristSpot/${params.id}`)
      },
      {
        path: '/countries/:id',
        element:<CountryWiseSpots></CountryWiseSpots>,
        loader: ({params})=> fetch(`https://10th-project-server.vercel.app/countries/${params.id}`)
      }

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
   
  </React.StrictMode>,
)
