import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost'; 
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider

const App = () => {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
