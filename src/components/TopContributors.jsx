import React, { useEffect, useState } from "react";

const TopContributors = () => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        fetch("https://recipe-server-black.vercel.app/top-contributors")
            .then(res => res.json())
            .then(data => setContributors(data));
    }, []);

    return (
        <div className="p-4 mb-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500">Top Contributors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {contributors.map((user, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center"
                    >
                        <img
                            src={user.photo}
                            alt={user.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-orange-400 mb-3"
                        />
                        <h3 className="text-lg font-semibold">{user.name || "Unknown"}</h3>
                        <p className="text-sm text-gray-500">{user._id}</p>
                        <p className="mt-2 text-orange-600 font-medium">
                            {user.totalRecipes} Recipes
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopContributors;
