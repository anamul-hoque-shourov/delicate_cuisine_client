import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, userInfo, googleLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const registerWithEmailAndPassword = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { name, photo, email, password } = Object.fromEntries(formData.entries());

        if (!name) {
            toast.error("Enter your name");
            return;
        }

        if (!photo) {
            toast.error("Give your photo url");
            return;
        }

        if (!email) {
            toast.error("Enter your email");
            return;
        }

        if (!password) {
            toast.error("Enter your password");
            return;
        }


        createUser(email, password)
            .then(() => {
                userInfo(name, photo)
                    .then(() => {
                        form.reset();
                        toast.success("Account created successfully");
                    })
                    .catch(() => {
                        toast.error("Profile update failed");
                    });
            })
            .catch(() => {
                toast.error("Account creation failed");
            });
    };

    const registerWithGoogleId = () => {
        googleLogin()
            .then(() => {
                toast.success("Google registration successful");
            })
            .catch(() => {
                toast.error("Google registration failed");
            });
    };

    return (
        <div className="p-5 card bg-base-100 w-full max-w-sm shrink-0 border border-gray-200 shadow mx-auto">
            <h1 className="text-3xl font-bold text-center">Register Account</h1>

            <form onSubmit={registerWithEmailAndPassword} className="fieldset mt-4 space-y-4">

                <div>
                    <label className="text-base font-semibold">Name</label>
                    <input
                        name="name"
                        type="text"
                        className="input w-full"
                        placeholder="Enter Your Name"
                    />
                </div>

                <div>
                    <label className="text-base font-semibold">Photo URL</label>
                    <input
                        name="photo"
                        type="text"
                        className="input w-full"
                        placeholder="Enter Your Photo URL"
                    />
                </div>

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
                    Register
                </button>

                <div className="flex items-center w-full">
                    <hr className="w-full" />
                    <p className="px-3 font-semibold text-base">OR</p>
                    <hr className="w-full" />
                </div>

                <button
                    type="button"
                    onClick={registerWithGoogleId}
                    className="btn btn-neutral text-base text-white w-full flex items-center justify-center gap-2"
                >
                    <FaGoogle size={20} />
                    Register with Google
                </button>
            </form>
        </div>
    );
};

export default Register;
