import React from 'react';

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
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeGrid;