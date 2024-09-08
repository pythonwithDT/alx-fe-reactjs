import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the hook to get authentication status

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
