import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '@ecommerce/shared';
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
          border-b transition-colors duration-300
          ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
            >
              E-Commerce
            </Link>

            {isAuthenticated && (
              <nav className="hidden md:flex items-center gap-1">
                <Link
                  to="/products"
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}
                  `}
                >
                  Products
                </Link>
                <Link
                  to="/cart"
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}
                  `}
                >
                  Cart
                </Link>
                {user?.role === 'admin' && (
                  <Link
                    to="/dashboard"
                    className={`
                      px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}
                    `}
                  >
                    Dashboard
                  </Link>
                )}
              </nav>
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <Suspense fallback={<div className="text-sm">Loading...</div>}>
                <ErrorBoundary>
                  <CartButton />
                </ErrorBoundary>
              </Suspense>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`
                h-10 w-10 rounded-lg flex items-center justify-center
                transition-all duration-200
                ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-200 hover:bg-gray-300'
                }
              `}
            >
              {isDark ? '🌙' : '☀️'}
            </button>

            {isAuthenticated ? (
              <>
                <span
                  className={`
                    hidden sm:block text-sm
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                  `}
                >
                  {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="
                    px-4 py-2 rounded-lg text-sm font-medium
                    bg-red-600 text-white
                    hover:bg-red-700 transition-all
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="
                  px-4 py-2 rounded-lg text-sm font-medium
                  bg-gray-900 text-white
                  hover:bg-gray-800 transition-all
                "
              >
                Login
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
    </div>
  );
};
