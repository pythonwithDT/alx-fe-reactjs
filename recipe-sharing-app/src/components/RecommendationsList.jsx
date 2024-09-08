import { useEffect } from 'react';
import useRecipeStore from './recipeStore'; // Import without curly braces

const RecommendationsList = () => {
  const { filteredRecipes, setSearchTerm } = useRecipeStore();

  useEffect(() => {
    // Example effect
    setSearchTerm(''); // Setting search term to an empty string
  }, [setSearchTerm]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {/* Render filtered recipes */}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  );
};

export default RecommendationsList;
