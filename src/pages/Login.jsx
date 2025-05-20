import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
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
            })
            .catch(() => {
                toast.error("Login failed");
            });
    };

    const loginWithGoogleId = () => {
        googleLogin()
            .then(() => {
                toast.success("Logged in successfully");
            })
            .catch(() => {
                toast.error("Login failed");
            });
    };

    return (
        <div className="p-5 card bg-base-100 w-full max-w-sm shrink-0 border border-gray-200 shadow mx-auto">
            <h1 className="text-3xl font-bold text-center">Login Account</h1>

            <form onSubmit={loginWithEmailAndPassword} className="fieldset mt-4 space-y-4">

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
                            className="absolute right-2 top-2.5 cursor-pointer z-10"
                        >
                            {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                        </button>
                    </div>
                </div>

                <button type="submit" className="btn btn-neutral text-base text-white w-full">
                    Login
                </button>

                <div className="flex items-center w-full mt-2">
                    <hr className="w-full" />
                    <p className="px-3 font-semibold text-base">OR</p>
                    <hr className="w-full" />
                </div>

                <button
                    type="button"
                    onClick={loginWithGoogleId}
                    className="btn btn-neutral text-base text-white w-full flex items-center justify-center gap-2"
                >
                    <FaGoogle size={20} />
                    Login with Google
                </button>
            </form>
        </div>
    );
};

export default Login;
