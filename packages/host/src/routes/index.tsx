import { createBrowserRouter, Navigate } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MainLayout } from '../layouts/MainLayout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { useAuthStore } from '../stores/authStore';
import { RemoteWrapper } from '../components/RemoteWrapper';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'products',
        element: (
          <ProtectedRoute>
            <RemoteWrapper module="productCatalog" component="ProductList" />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products/:id',
        element: (
          <ProtectedRoute>
            <RemoteWrapper module="productCatalog" component="ProductDetail" />
          </ProtectedRoute>
        ),
      },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <RemoteWrapper module="shoppingCart" component="Cart" />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
