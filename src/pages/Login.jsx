import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, googleLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const loginWithEmailAndPassword = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());

        if (!email) {
            toast.error("Please enter your email");
            return;
        }
        if (!password) {
            toast.error("Please enter your password");
            return;
        }

        signInUser(email, password)
            .then(() => {
                form.reset();
                toast.success("Logged in successfully");
                navigate("/");
            })
            .catch(() => {
                toast.error("Login failed");
            });
    };

    const loginWithGoogleId = () => {
        googleLogin()
            .then(() => {
                toast.success("Logged in successfully");
                navigate("/");
            })
            .catch(() => {
                toast.error("Login failed");
            });
    };

    return (
        <div className="p-4">
            <form onSubmit={loginWithEmailAndPassword} className="max-w-sm space-y-2 p-4 card w-full border border-gray-200 shadow mx-auto">
                <h1 className="text-3xl font-bold text-center">Login Account</h1>
                <div>
                    <label className="text-base font-semibold">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="input w-full"
                        placeholder="Enter Your Email"
                    />
                </div>

                <div>
                    <label className="text-base font-semibold">Password</label>
                    <div className="relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="input w-full"
                            placeholder="Enter Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-2.5 cursor-pointer z-10 text-orange-500"
                        >
                            {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                        </button>
                    </div>
                </div>

                <button type="submit" className="btn btn-neutral text-base bg-orange-500 hover:bg-orange-600 text-white w-full border-none shadow-none">
                    Login
                </button>

                <div className="flex items-center w-full">
                    <hr className="w-full" />
                    <p className="px-3 font-semibold text-base">OR</p>
                    <hr className="w-full" />
                </div>

                <button
                    type="button"
                    onClick={loginWithGoogleId}
                    className="btn btn-neutral text-base bg-orange-500 hover:bg-orange-600 text-white w-full flex items-center justify-center gap-2 border-none shadow-none"
                >
                    <FaGoogle size={20} />
                    Login with Google
                </button>
                <p className='text-base'>Don't have an account? Please <Link className='underline text-orange-500' to="/register">register</Link></p>
            </form>
        </div>
    );
};

export default Login;
