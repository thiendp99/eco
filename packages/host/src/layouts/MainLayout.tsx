import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '../stores/themeStore';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';

// Lazy load CartButton from remote
const CartButton = lazy(() => import('shoppingCart/CartButton'));

export const MainLayout = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isDark = theme === 'dark';

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
    }}>
      <header style={{
        padding: '1rem 2rem',
        backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
        borderBottom: `1px solid ${isDark ? '#404040' : '#e0e0e0'}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              🛒 E-Commerce
            </Link>
          </h1>
          
          {isAuthenticated && (
            <nav style={{ display: 'flex', gap: '1.5rem' }}>
              <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                Products
              </Link>
              <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
                Cart
              </Link>
              {user?.role === 'admin' && (
                <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Dashboard
                </Link>
              )}
            </nav>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Cart Button - loaded from remote */}
          {isAuthenticated && (
            <Suspense fallback={<div>🛒</div>}>
              <ErrorBoundary>
                <CartButton />
              </ErrorBoundary>
            </Suspense>
          )}

          <button
            onClick={toggleTheme}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: isDark ? '#404040' : '#e0e0e0',
              color: 'inherit',
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {isAuthenticated ? (
            <>
              <span>Hi, {user?.name}</span>
              <button
                onClick={handleLogout}
                style={{
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: '#dc3545',
                  color: 'white',
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                textDecoration: 'none',
                backgroundColor: '#007bff',
                color: 'white',
              }}
            >
              Login
            </Link>
          )}
        </div>
      </header>

      <main style={{ padding: '2rem' }}>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>

      <footer style={{
        padding: '1rem 2rem',
        backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
        borderTop: `1px solid ${isDark ? '#404040' : '#e0e0e0'}`,
        textAlign: 'center',
        marginTop: 'auto',
      }}>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>
          © 2024 E-Commerce Micro Frontend Platform
        </p>
      </footer>
    </div>
  );
};
