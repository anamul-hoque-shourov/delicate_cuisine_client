import React from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const { image, title, ingredients, instructions, prepTime, categories, cuisineType, ownerName, ownerPhoto, likes } = useLoaderData();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-5" />

            <div>
                <h2 className="text-3xl font-bold mb-3">{ownerName}</h2>
                <img
                    className="w-10 rounded-full"
                    alt=""
                    src={ownerPhoto}
                />
            </div>
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            <p><strong>Cuisine Type:</strong> {cuisineType}</p>
            <p><strong>Prep Time:</strong> {prepTime} mins</p>
            <p><strong>Categories:</strong> {categories}</p>
            <p className="mt-4"><strong>Ingredients:</strong> {ingredients}</p>
            <p className="mt-4"><strong>Instructions:</strong> {instructions}</p>
            <div className="mt-6 flex items-center gap-4">
                <button
                    // onClick={handleLike}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
                >
                    Like ❤️
                </button>
                <span>{likes} Likes</span>
            </div>
        </div>
    );
};

export default RecipeDetails;