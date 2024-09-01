import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // This will hold all the recipes available
  favorites: [], // This array will store the IDs of favorite recipes

  // Action to add a recipe to the favorites list
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from the favorites list
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [], // This array will store the recommended recipes

  // Mock function to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Example logic for recommendations
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
