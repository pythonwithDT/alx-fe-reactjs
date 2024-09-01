import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import useRecipeStore from '../components/recipeStore';

import RecipeDetails from './components/RecipeDetails';  
import AddRecipeForm from './components/AddRecipeForm';

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
    </Router>
  );
}

export default App;
