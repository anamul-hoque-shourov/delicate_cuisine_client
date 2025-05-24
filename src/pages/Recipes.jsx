import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [cuisineTypes, setCuisineTypes] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://recipe-server-black.vercel.app/recipes")
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data);
                setFilteredRecipes(data);
                // Extract unique cuisine types
                const cuisines = ["All", ...new Set(data.map(item => item.cuisineType))];
                setCuisineTypes(cuisines);
                setLoading(false);
            });
    }, []);

    const handleCuisineChange = (e) => {
        const selected = e.target.value;
        setSelectedCuisine(selected);
        if (selected === "All") {
            setFilteredRecipes(recipes);
        } else {
            setFilteredRecipes(recipes.filter(recipe => recipe.cuisineType === selected));
        }
    };

    if (loading) {
        return <div className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">All Recipes</h2>

            <div className="mb-6 text-center">
                <label htmlFor="cuisine-filter" className="mr-2 text-lg font-medium">Filter by Cuisine:</label>
                <select
                    id="cuisine-filter"
                    value={selectedCuisine}
                    onChange={handleCuisineChange}
                    className="border border-gray-300 rounded-md px-3 py-1"
                >
                    {cuisineTypes.map(cuisine => (
                        <option key={cuisine} value={cuisine}>{cuisine}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredRecipes.map(recipe => (
                    <div key={recipe._id} className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                        <h3 className="text-xl font-semibold">{recipe.title}</h3>
                        <p className="text-sm text-gray-600">Cuisine: {recipe.cuisineType}</p>
                        <p className="text-sm text-gray-600">Prep Time: {recipe.prepTime} mins</p>
                        <p className="text-sm text-gray-600">Likes: {recipe.likes}</p>
                        <Link to={`/recipes/${recipe._id}`}>
                            <button className="mt-3 w-full bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600 transition">
                                See Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;
