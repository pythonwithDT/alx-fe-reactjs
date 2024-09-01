import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },

  // Action to initialize recipes
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Action to add a new recipe
  addRecipe: (newRecipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },
}));import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },

  // Action to initialize recipes
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Action to add a new recipe
  addRecipe: (newRecipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },
}));

export default useRecipeStore;


export default useRecipeStore;
