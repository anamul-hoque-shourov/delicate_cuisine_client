import React from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const { image, title, ingredients, instructions, prepTime, categories, cuisineType, ownerName, ownerPhoto, likes, date } = useLoaderData();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-5" />

            <div className='flex justify-end items-center gap-2 mb-2'>
                <div>
                    <h2 className="font-semibold">Recipe by: {ownerName}</h2>
                    <p className="text-xs font-semibold">Recipe added on: {date}</p>
                </div>
                <img alt="" src={ownerPhoto} className="w-8 h-8 rounded-full object-cover" />
            </div>
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            <p><strong>Cuisine Type:</strong> {cuisineType}</p>
            <p><strong>Prep Time:</strong> {prepTime} mins</p>
            <p><strong>Categories:</strong>
            {
                categories.map((category,index)=><li key={index}>{category}</li>)
            }
            </p>
            <p className="mt-4"><strong>Ingredients:</strong>
                {
                    ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }
            </p>
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