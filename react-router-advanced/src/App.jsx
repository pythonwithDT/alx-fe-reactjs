import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost'; // Import BlogPost component
import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = false; // Example authentication status

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Add dynamic route for BlogPost */}
      </Routes>
    </Router>
  );
};

export default App;
