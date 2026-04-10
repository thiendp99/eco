import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '@ecommerce/shared';

export const DashboardPage = () => {
  const { user } = useAuthStore();
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={`rounded-2xl border p-8 mb-6 ${
          isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        }`}
      >
        <h1
          className={`text-3xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Dashboard
        </h1>
        <p
          className={`text-sm mb-6 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          Welcome back,{' '}
          <span className="font-medium">{user?.name ?? 'Admin'}</span>
        </p>

        <div
          className={`rounded-xl border p-6 ${
            isDark
              ? 'bg-gray-800 border-gray-700'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <p
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            🚧 Admin dashboard — coming soon.
          </p>
        </div>
      </div>

      <Link
        to="/products"
        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
          isDark
            ? 'text-gray-400 hover:text-white'
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        ← Back to Products
      </Link>
    </div>
  );
};
