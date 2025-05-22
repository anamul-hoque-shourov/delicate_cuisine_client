import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);

    // NavLink list
    const navlinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/recipes">All Recipes</NavLink></li>
            {
                user &&
                <>
                    <li><NavLink to="/recipeAdd">Add Recipes</NavLink></li>
                    <li><NavLink to="/myRecipes">My Recipes</NavLink></li>
                </>
            }
        </>
    );

    // SignOut function
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("User have signed out");
                navigate("/")
            })
            .catch(() => {
                toast.error("Sign out failed");
            });
    };

    return (
        <div className="navbar bg-base-100 shadow-sm text-orange-500">
            <div className="navbar-start">

                {/* Small screen dropdown menu */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>

                {/* Website title */}
                <a
                    onClick={() => navigate("/")}
                    className="font-semibold text-xl cursor-pointer">
                    Delicate Cuisine
                </a>
            </div>

            {/* Large screen menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="flex gap-2">
                                <div className="dropdown dropdown-end">

                                    {/* User profile photo */}
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt=""
                                                src={user?.photoURL}
                                            />
                                        </div>
                                    </div>

                                    {/* User dropdown menu */}
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a onClick={() => navigate("/myProfile")}>{user?.displayName}</a></li>
                                        <li><a onClick={() => handleSignOut()}>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <a onClick={() => navigate("/register")} className="btn">Register</a>
                            <a onClick={() => navigate("/login")} className="btn">Login</a>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;