import { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export const useAccessControl = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // For now, grant access to all authenticated users
      // In a real app, you would check user permissions/roles here
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
    setIsLoading(false);
  }, [user]);

  const redirectIfNoAccess = () => {
    if (!hasAccess && !isLoading) {
      navigate('/signin');
    }
  };

  const isRestrictedRoute = (pathname: string) => {
    const restrictedRoutes = ['/dashboard', '/log', '/history', '/analysis', '/profile'];
    return restrictedRoutes.some(route => pathname.startsWith(route));
  };

  return { 
    user, 
    hasAccess, 
    isLoading, 
    redirectIfNoAccess,
    isRestrictedRoute
  };
}; 