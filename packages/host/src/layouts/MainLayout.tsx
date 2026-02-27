import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '@ecommerce/shared';
import { Suspense, lazy } from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';

const CartButton = lazy(() => import('shoppingCart/CartButton'));
const CartDrawer = lazy(() => import('shoppingCart/CartDrawer'));

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
    <div
      className={`
        min-h-screen flex flex-col transition-colors duration-300
        ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}
      `}
    >
      {/* Header */}
      <header
        className={`
    sticky top-0 z-40
    border-b transition-colors duration-300 backdrop-blur-md
    ${isDark ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'}
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* --- LEFT SECTION: BRAND & NAV --- */}
          <div className="flex items-center gap-10">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              {/* Minimalist Logo Icon */}
              <div
                className={`
          w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-105
          ${isDark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}
        `}
              >
                E
              </div>
              <span
                className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                Commerce
              </span>
            </Link>

            {/* Main Navigation */}
            {isAuthenticated && (
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  to="/products"
                  className={`
              text-sm font-medium transition-colors duration-200
              ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}
            `}
                >
                  Products
                </Link>

                {user?.role === 'admin' && (
                  <Link
                    to="/dashboard"
                    className={`
                text-sm font-medium transition-colors duration-200
                ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}
              `}
                  >
                    Dashboard
                  </Link>
                )}
              </nav>
            )}
          </div>

          {/* --- RIGHT SECTION: TOOLS & AUTH --- */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              {isAuthenticated && (
                <Suspense
                  fallback={
                    <div className="w-8 h-8 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-full" />
                  }
                >
                  <ErrorBoundary>
                    <CartButton />
                  </ErrorBoundary>
                </Suspense>
              )}

              {/* Theme Toggle - Ghost Button & SVG Icon */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`
            p-2 rounded-full transition-colors duration-200
            ${
              isDark
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }
          `}
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div
              className={`hidden sm:block w-px h-5 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}
            ></div>

            {isAuthenticated ? (
              <div className="flex items-center gap-4 pl-1">
                <span
                  className={`hidden sm:block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className={`
              text-sm font-medium transition-colors duration-200
              ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-900'}
            `}
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`
            px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${
              isDark
                ? 'bg-white text-gray-900 hover:bg-gray-200'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }
          `}
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div
                  className={`
                    text-center py-20 text-sm
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}
                >
                  Loading page...
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`
    border-t transition-colors duration-300
    ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Left */}
            <div
              className={`
          text-sm tracking-wide
          ${isDark ? 'text-gray-400' : 'text-gray-600'}
        `}
            >
              © {new Date().getFullYear()}{' '}
              <span
                className={`
            font-medium
            ${isDark ? 'text-gray-200' : 'text-gray-900'}
          `}
              >
                E-Commerce
              </span>
              <span className="hidden sm:inline">
                {' '}
                · Micro Frontend Platform
              </span>
            </div>

            {/* Right */}
            <div
              className={`
          text-xs
          ${isDark ? 'text-gray-500' : 'text-gray-400'}
        `}
            >
              Built with React & TailwindCSS
            </div>
          </div>
        </div>
      </footer>

      {isAuthenticated && (
        <Suspense fallback={null}>
          <ErrorBoundary>
            <CartDrawer />
          </ErrorBoundary>
        </Suspense>
      )}
    </div>
  );
};
