import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const MyRecipes = () => {
  const allRecipes = useLoaderData();
  const { user } = useContext(AuthContext);
  const myRecipes = allRecipes.filter(recipe => recipe.ownerEmail === user.email)
  const [recipes, setRecipes] = useState(myRecipes);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-sm mb-1">
              <strong>Cuisine:</strong> {recipe.cuisineType}
            </p>
            <p className="text-sm mb-1">
              <strong>Preparation Time:</strong> {recipe.prepTime}
            </p>
            <p className="text-sm mb-1">
              <strong>Category:</strong> {recipe.category}
            </p>
            <p className="text-sm mb-1">
              <strong>Likes:</strong> {recipe.likes}
            </p>
            <div className="mt-2">
              <p className="text-sm font-semibold">Ingredients:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {/* {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))} */}
              </ul>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold">Instructions:</p>
              <p className="text-sm text-gray-700">{recipe.instructions}</p>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <button
                onClick={() => onUpdate(recipe.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => onDelete(recipe.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default MyRecipes;
