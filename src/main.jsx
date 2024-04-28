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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
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
        loader: ()=> fetch('http://localhost:5000/touristSpot')
      },
      {
        path: '/userSpot',
        element: <PrivateRoute><UserTouristSpot></UserTouristSpot></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/touristSpot')
      },
      {
        path:'/updateSpot/:id',
        element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/touristSpot/${params.id}`)
      }

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
   
  </React.StrictMode>,
)
