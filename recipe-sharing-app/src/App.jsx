import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';  
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from '../recipeStore';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

function App() {
  return (
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Add this route */}
        </Routes>
      </div>
      <div>
      <h1>Recipe Sharing App</h1>
      <FavoritesList />
      <RecommendationsList />
    </div>
    </Router>
  );
}

export default App;
