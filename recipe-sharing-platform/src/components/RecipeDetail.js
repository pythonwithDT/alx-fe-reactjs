import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img className="w-full h-64 object-cover rounded-t-lg" src={recipe.image} alt={recipe.title} />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700">{recipe.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
