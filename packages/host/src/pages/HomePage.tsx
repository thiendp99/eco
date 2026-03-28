import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '@ecommerce/shared';

const features = [
  {
    icon: '🏗️',
    title: 'Micro Frontend Architecture',
    description:
      'Built with Module Federation for scalable, independent deployments',
  },
  {
    icon: '⚡',
    title: 'Blazing Fast',
    description: 'Powered by Vite for lightning-fast development and builds',
  },
  {
    icon: '🔄',
    title: 'State Management',
    description: 'React Query for server state, Zustand for client state',
  },
  {
    icon: '🧪',
    title: 'Testing Ready',
    description: 'Vitest for unit tests, Playwright for E2E testing',
  },
  {
    icon: '🌓',
    title: 'Theme Support',
    description: 'Dark and light themes with persistent preferences',
  },
  {
    icon: '📦',
    title: 'Modular Design',
    description:
      'Independent micro frontends for product catalog and shopping cart',
  },
];

export const HomePage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div
        className={`
          text-center px-8 py-16 mb-12 rounded-2xl
          ${
            isDark
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
              : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_4px_20px_rgba(102,126,234,0.3)]'
          }
        `}
      >
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Welcome to E-Commerce Platform
        </h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
          A modern micro frontend application built with React, Vite, and Module
          Federation
        </p>

        {!isAuthenticated ? (
          <div>
            <p className="text-base opacity-90 mb-6">
              Please login to start shopping
            </p>
            <Link
              to="/login"
              className="
                inline-block px-8 py-3.5 rounded-lg
                bg-white text-indigo-600 font-medium
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
              "
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-base opacity-90 mb-6">
              Start exploring our products!
            </p>
            <Link
              to="/products"
              className="
                inline-block px-8 py-3.5 rounded-lg
                bg-green-500 hover:bg-green-600 text-white font-medium
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(40,167,69,0.4)]
              "
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div>
        <h2
          className={`text-center text-3xl font-semibold mb-10 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        >
          Platform Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`
                p-8 rounded-xl border transition-all duration-300
                hover:-translate-y-1
                ${
                  isDark
                    ? 'bg-gray-900 border-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:border-gray-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
                    : 'bg-white border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:border-blue-400 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]'
                }
              `}
            >
              <div className="text-5xl mb-4 text-center">{feature.icon}</div>
              <h3
                className={`text-lg font-semibold mb-2 text-center ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
