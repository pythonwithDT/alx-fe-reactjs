import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, { id: Date.now(), ...recipe }]
  })),
  // Other state and actions...
}));

export { useRecipeStore };
