import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { baseURL } from '../constants/constants';

const RecipeDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const [recipe, setRecipe] = useState(null);
    const [likeCount, setLikeCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${baseURL}/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                setRecipe(data);
                setLikeCount(parseInt(data.likes));
                setLoading(false);
            });
    }, [id]);

    const handleLike = () => {
        const newLikes = likeCount + 1;

        fetch(`${baseURL}/recipes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: newLikes })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("You have liked the recipe");
                    setLikeCount(newLikes);
                }
            });
    };


    if (loading) {
        return <div className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></div>;
    }

    const { image, title, ingredients, instructions, prepTime, categories, cuisineType, ownerEmail, ownerName, ownerPhoto, date } = recipe;

    return (
        <div className="p-4">
            <div className="max-w-4xl bg-base-100 shadow mx-auto p-4 border border-gray-200 rounded-lg">
                <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-5" />

                <div className="flex justify-between items-start gap-2 mb-2">
                    <p>{likeCount} people interested in this recipe</p>
                    <div className="flex items-center gap-2">
                        <div>
                            <h2 className="font-semibold">Recipe by: {ownerName}</h2>
                            <p className="text-xs font-semibold text-gray-500">Recipe added on: {date}</p>
                        </div>
                        <img alt={ownerName} src={ownerPhoto} className="w-8 h-8 rounded-full object-cover" />
                    </div>
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

                {
                    user?.email !== ownerEmail &&
                    <div className="mt-6 flex items-center gap-4">
                        <button
                            onClick={handleLike}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
                        >
                            Like
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default RecipeDetails;
