import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 transform transition duration-500 hover:shadow-lg hover:scale-105">
            <img className="w-full h-32 object-cover rounded-t-lg" src={recipe.image} alt={recipe.title} />
            <div className="p-4">
              <Link to={`/recipe/${recipe.id}`}>
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              </Link>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;