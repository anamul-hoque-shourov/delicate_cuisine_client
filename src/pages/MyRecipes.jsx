import React, { useState } from 'react';

const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      image: 'https://source.unsplash.com/400x300/?pasta',
      title: 'Spaghetti Carbonara',
      ingredients: ['Spaghetti', 'Eggs', 'Parmesan Cheese', 'Bacon', 'Black Pepper'],
      instructions: 'Boil pasta. Cook bacon. Mix eggs and cheese. Combine everything.',
      cuisineType: 'Italian',
      prepTime: '30 minutes',
      category: 'Main Course',
      likes: 120,
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/400x300/?salad',
      title: 'Greek Salad',
      ingredients: ['Tomato', 'Cucumber', 'Feta Cheese', 'Olives', 'Red Onion'],
      instructions: 'Chop veggies. Mix all ingredients. Add dressing.',
      cuisineType: 'Greek',
      prepTime: '15 minutes',
      category: 'Salad',
      likes: 85,
    },
  ]);

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updated = recipes.map((r) =>
      r.id === editingRecipe.id ? editingRecipe : r
    );
    setRecipes(updated);
    setEditingRecipe(null);
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
    setDeleteConfirm(null);
    setSelectedRecipe(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">My Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mb-2">❤️ {recipe.likes} Likes</p>
              <button
                onClick={() => setSelectedRecipe(recipe)}
                className="mt-auto px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 text-sm"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedRecipe.title}</h2>
            <p><strong>Cuisine:</strong> {selectedRecipe.cuisineType}</p>
            <p><strong>Prep Time:</strong> {selectedRecipe.prepTime}</p>
            <p><strong>Category:</strong> {selectedRecipe.category}</p>
            <p><strong>Likes:</strong> {selectedRecipe.likes}</p>
            <div className="mt-4">
              <p className="font-semibold">Ingredients:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {selectedRecipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Instructions:</p>
              <p className="text-sm text-gray-700">{selectedRecipe.instructions}</p>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => {
                  setEditingRecipe({ ...selectedRecipe, ingredients: selectedRecipe.ingredients.join(', ') });
                  setSelectedRecipe(null);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 text-sm"
              >
                Update
              </button>
              <button
                onClick={() => setDeleteConfirm(selectedRecipe)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {editingRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl relative overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setEditingRecipe(null)}
              type="button"
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Update Recipe</h2>
            <div className="space-y-3">
              <input
                type="text"
                value={editingRecipe.title}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, title: e.target.value })}
                placeholder="Title"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                value={editingRecipe.ingredients}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, ingredients: e.target.value })}
                placeholder="Ingredients (comma-separated)"
                className="w-full border p-2 rounded"
              />
              <textarea
                value={editingRecipe.instructions}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, instructions: e.target.value })}
                placeholder="Instructions"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                value={editingRecipe.cuisineType}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, cuisineType: e.target.value })}
                placeholder="Cuisine Type"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                value={editingRecipe.prepTime}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, prepTime: e.target.value })}
                placeholder="Preparation Time"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                value={editingRecipe.category}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, category: e.target.value })}
                placeholder="Category"
                className="w-full border p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 text-sm"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-4">Are you sure you want to delete <strong>{deleteConfirm.title}</strong>?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRecipesPage;
