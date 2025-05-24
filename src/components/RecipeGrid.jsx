import React from 'react';
import { Link } from 'react-router';

const RecipeGrid = ({ recipes }) => {

    const placeholderImage = "https://via.placeholder.com/400x300?text=No+Image";
    const topRecipes = [...recipes]
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 6);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">Top Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {topRecipes.map((recipe) => (
                    <div
                        key={recipe._id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={recipe.image || placeholderImage}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{recipe.title}</h3>
                            <p className="text-sm text-gray-500">{recipe.cuisineType}</p>
                            <p className="text-sm mt-1">{recipe.likes} likes</p>
                            <Link to={`/recipes/${recipe._id}`}>
                                <button className="mt-3 w-full bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600 transition">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <Link className="mx-auto" to="/recipes">
                    <button className="mx-auto mt-3 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeGrid;