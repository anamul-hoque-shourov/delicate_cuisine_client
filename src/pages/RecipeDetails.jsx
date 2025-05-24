import React from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const { image, title, ingredients, instructions, prepTime, categories, cuisineType, ownerName, ownerPhoto, likes, date } = useLoaderData();

    return (
        <div className="p-4">
            <div className="max-w-4xl bg-base-100 shadow mx-auto p-4 border border-gray-200 rounded-lg">
                <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-5" />

                <div className="flex justify-end items-center gap-2 mb-2">
                    <div>
                        <h2 className="font-semibold">Recipe by: {ownerName}</h2>
                        <p className="text-xs font-semibold text-gray-500">Recipe added on: {date}</p>
                    </div>
                    <img alt={ownerName} src={ownerPhoto} className="w-8 h-8 rounded-full object-cover" />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 rounded-lg">
                        <h2 className="text-3xl font-bold mb-3">{title}</h2>
                        <p><strong>Cuisine Type:</strong> {cuisineType}</p>
                        <p><strong>Preparing Time:</strong> {prepTime} mins</p>
                        <p><strong>Categories:</strong></p>
                        <ul className="list-disc list-inside">
                            {categories.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                        <ul className="list-disc list-inside">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
                    <p>{instructions}</p>
                </div>

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
        </div>

    );
};

export default RecipeDetails;