import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

