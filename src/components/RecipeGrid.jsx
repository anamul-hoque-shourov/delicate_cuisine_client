import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const RecipeGrid = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/popular-recipes")
            .then(res => res.json())
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <div className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">Top Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div
                        key={recipe._id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{recipe.title}</h3>
                            <p className="text-sm text-gray-500">{recipe.cuisineType}</p>
                            <p className="text-sm mt-1">{recipe.likes} likes</p>
                            <Link to={`/recipes/${recipe._id}`}>
                                <button className="mt-3 w-full bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600 cursor-pointer">
                                    See Recipe
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <Link className="mx-auto" to="/recipes" onClick={() => window.scrollTo(0, 0)}>
                    <button className="mx-auto mt-3 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 cursor-pointer">
                        All Recipes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeGrid;