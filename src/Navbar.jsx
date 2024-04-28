import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
   
    const {user, logOut} =useContext(AuthContext);
     
    const handleSignOut=()=>{
            logOut()
            .then()
            .catch()
    }


    return (
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 ">
                <li ><NavLink to='/'>Home</NavLink></li>
                <li ><NavLink to='/about'>About Us</NavLink></li>
                <li ><NavLink to='/updateProfile'>User Profile</NavLink></li>
                <li>
                {
                    user?
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                    :
                    <div>
                        <button className="btn">
                        <Link to='/signIn'>Sign In</Link></button>
                        <button className="btn">
                        <Link to='/register'>Register</Link></button>
                    </div>
                   
                }
                </li>
                </ul>
                </div>
                
                <div className="avatar ">
                <div className="lg:w-20 w-10 mask mask-squircle">
                    {
                        user?.photoURL?
                        <div className="tooltip  tooltip-left" title={user.displayName}>
                            <img src={user.photoURL} />
                        </div>
                        
                        :
                        <div title={user?.displayName?user.displayName: "No user"}>
                            <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" /> 
                        </div>

                        
                    }
                    
                </div>
                   
                </div>
            </div>
            <div className="navbar-center ">
                <a className="btn btn-ghost font-extrabold text-3xl">Cascade Realty</a>
            </div>
            <div className="navbar-end hidden lg:flex space-x-4">
                <ul className="menu menu-horizontal px-1 ">
                <li ><NavLink to='/'>Home</NavLink></li>
                <li ><NavLink to='/about'>About Us</NavLink></li>
                <li ><NavLink to='/updateProfile'>User Profile</NavLink></li>
                <li>
                {
                    user?
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                    :
                    <div className="border-2">
                        <button className="btn btn-sm">
                        <Link to='/signIn'>Sign In</Link></button>
                        <button className="btn btn-sm">
                        <Link to='/register'>Register</Link></button>
                    </div>
                }
                </li>
                </ul>
               
                
                
            </div>
        </div>
    </div>
    );
};

export default Navbar;