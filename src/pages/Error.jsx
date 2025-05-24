import React from 'react';
import { useNavigate } from 'react-router';
import errorImage from "../assets/img404.jpg";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-white p-4 text-center">
            <img
                src={errorImage}
                alt="404 - Page Not Found"
                className="max-w-full max-h-[50vh] object-contain mb-6"
            />
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                Oops! The page you're looking for doesn't exist.
            </h2>
            <button
                onClick={() => navigate('/')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded cursor-pointer"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default Error;
