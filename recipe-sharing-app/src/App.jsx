import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import useRecipeStore from './components/recipeStore'; // Correct path if recipeStore.js is inside components folder
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
        <div>
          <h1>Recipe Sharing App</h1>
          <FavoritesList />
          <RecommendationsList />
        </div>
      </div>
    </Router>
  );
}

export default App;
