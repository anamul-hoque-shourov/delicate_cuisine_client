import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const RecipeAdd = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);

    const handleAddRecipe = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());

        newRecipe.categories = formData.getAll('categories');
        newRecipe.ingredients = formData.get("ingredients").split(",").map(item => item.trim()).filter(item => item);

        newRecipe.ownerName = user.displayName;
        newRecipe.ownerEmail = user.email;
        newRecipe.ownerPhoto = user.photoURL;
        newRecipe.date = getFormattedBDTime()

        console.log(newRecipe);

        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newRecipe),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success("Recipe added successfully");
                    form.reset();
                };
            })
    };

    const getFormattedBDTime = () => {
        const now = new Date();
        const bdTime = now.toLocaleString("en-GB", {
            timeZone: "Asia/Dhaka",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
        return bdTime;
    };


    return (
        <div className="min-h-screen bg-orange-50 flex justify-center items-center p-4">
            <form onSubmit={handleAddRecipe} className="w-full max-w-2xl bg-white p-4 rounded-lg shadow">
                <h2 className="text-2xl font-bold pb-4 text-center text-orange-500">Add New Recipe</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="image"
                        placeholder="Image"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        required
                    />

                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        required
                    />

                    <input
                        type="text"
                        name="ingredients"
                        placeholder="Ingredients (comma-separated)"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        required
                    />

                    <textarea
                        name="instructions"
                        placeholder="Instructions"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        rows="4"
                        required
                    />

                    <div>
                        <label className="block mb-1 font-medium">Cuisine Type</label>
                        <select
                            name="cuisineType"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        >
                            <option value="Bengali">Bengali</option>
                            <option value="Thai">Thai</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Italian">Italian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <input
                        type="number"
                        name="prepTime"
                        placeholder="Preparation Time (in minutes)"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        required
                    />

                    <label className='py-2 font-medium underline'>Select Categories</label>
                    <div className="flex flex-wrap gap-2">
                        {["Appetizer", "Breakfast", "Dessert", "Dinner", "Lunch", "Snacks", "Salad", "Vegan", "Other"].map((category) => (
                            <label key={category} className="flex items-center gap-3">
                                <input
                                    name="categories"
                                    type="checkbox"
                                    value={category}
                                    className="accent-blue-500"
                                />
                                <span>{category}</span>
                            </label>
                        ))}
                    </div>
                    <label className='font-medium'>Total likes: </label>
                    <input
                        type="number"
                        name="likes"
                        value={0}
                        readOnly
                        className="w-fit border border-gray-300 rounded-lg px-3 py-2"
                    />

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 font-semibold"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RecipeAdd;