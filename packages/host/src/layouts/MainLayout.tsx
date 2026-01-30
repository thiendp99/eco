import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '../../../shared/src/stores/themeStore';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';

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

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    fontWeight: 500,
    fontSize: '0.95rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '0.9rem',
    fontWeight: 500,
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <header
        style={{
          padding: '1rem 2rem',
          backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
          borderBottom: `1px solid ${isDark ? '#404040' : '#e0e0e0'}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              E-Commerce
            </Link>
          </h1>

          {isAuthenticated && (
            <nav
              style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
            >
              <Link
                to="/products"
                style={{
                  ...linkStyle,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDark
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Products
              </Link>
              <Link
                to="/cart"
                style={{
                  ...linkStyle,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDark
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Cart
              </Link>
              {user?.role === 'admin' && (
                <Link
                  to="/dashboard"
                  style={{
                    ...linkStyle,
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Dashboard
                </Link>
              )}
            </nav>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {isAuthenticated && (
            <Suspense
              fallback={<div style={{ fontSize: '0.875rem' }}>Loading...</div>}
            >
              <ErrorBoundary>
                <CartButton />
              </ErrorBoundary>
            </Suspense>
          )}
          <button
            onClick={toggleTheme}
            style={{
              ...buttonStyle,
              backgroundColor: isDark ? '#404040' : '#e0e0e0',
              color: 'inherit',
              minWidth: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark
                ? '#505050'
                : '#d0d0d0';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDark
                ? '#404040'
                : '#e0e0e0';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Toggle theme"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
          {isAuthenticated ? (
            <>
              <span
                style={{
                  fontSize: '0.9rem',
                  padding: '0.5rem 0.75rem',
                  color: isDark ? '#b0b0b0' : '#666',
                }}
              >
                {user?.name}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  ...buttonStyle,
                  backgroundColor: '#dc3545',
                  color: 'white',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c82333';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc3545';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              style={{
                ...buttonStyle,
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Login
            </Link>
          )}
        </div>
      </header>

      <main
        style={{
          padding: '2rem',
          flex: 1,
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          transition: 'padding 0.3s ease',
        }}
      >
        <ErrorBoundary>
          <Suspense
            fallback={
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem',
                  color: isDark ? '#b0b0b0' : '#666',
                }}
              >
                Loading page...
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>

      <footer
        style={{
          padding: '1.5rem 2rem',
          backgroundColor: isDark ? '#2d2d2d' : '#f5f5f5',
          borderTop: `1px solid ${isDark ? '#404040' : '#e0e0e0'}`,
          textAlign: 'center',
          marginTop: 'auto',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '0.875rem',
            color: isDark ? '#b0b0b0' : '#666',
          }}
        >
          © {new Date().getFullYear()} E-Commerce Micro Frontend Platform
        </p>
      </footer>
    </div>
  );
};
