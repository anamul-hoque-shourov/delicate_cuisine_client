import React from 'react';

const RecipeAdd = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <form className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        required
                    />

                    <input
                        type="text"
                        name="title"
                        placeholder="Recipe Title"
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

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 font-semibold"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RecipeAdd;