import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MainLayout } from '../layouts/MainLayout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { RemoteWrapper } from '../components/RemoteWrapper';

export const router = createBrowserRouter(
  [
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
              <RemoteWrapper
                module="productCatalog"
                component="ProductDetail"
              />
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
          path: 'dashboard',
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
