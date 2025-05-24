import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://recipe-server-black.vercel.app/recipes/user?email=${user.email}`)
        .then(res => res.json())
        .then((data) => {
          setRecipes(data);
          setLoading(false);
        })
    }
  }, [user]);

  const onUpdate = (id) => {
    // Update logic here
    console.log("Update recipe", id);
  };

  const onDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This recipe will be permanently deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://recipe-server-black.vercel.app/recipes/${id}`, {
          method: "DELETE"
        })
          .then(() => {
            setRecipes(prev => prev.filter(recipe => recipe._id.toString() !== id.toString()));
            Swal.fire('Deleted!', 'Your recipe has been deleted.', 'success');
          });
      }
    });
  };


  if (loading) {
    return <div className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></div>;
  }

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
            <p className="text-sm mb-1"><strong>Cuisine:</strong> {recipe.cuisineType}</p>
            <p className="text-sm mb-1"><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
            <p className="text-sm mb-1"><strong>Category:</strong></p>
            <ul className="list-disc list-inside text-sm mb-1">
              {recipe.categories.map((cat, index) => (
                <li key={index}>{cat}</li>
              ))}
            </ul>
            <p className="text-sm mb-1"><strong>Likes:</strong> {recipe.likes}</p>
            <div className="mt-2">
              <p className="text-sm font-semibold">Ingredients:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold">Instructions:</p>
              <p className="text-sm text-gray-700">{recipe.instructions}</p>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <button
                onClick={() => onUpdate(recipe._id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => onDelete(recipe._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRecipes;
