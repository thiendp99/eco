import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '@ecommerce/shared';

export const HomePage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

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

  const buttonStyle = {
    display: 'inline-block',
    padding: '0.875rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          marginBottom: '4rem',
          background: isDark
            ? 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: isDark ? '#ffffff' : '#ffffff',
          boxShadow: isDark
            ? '0 4px 20px rgba(0, 0, 0, 0.3)'
            : '0 4px 20px rgba(102, 126, 234, 0.3)',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Welcome to E-Commerce Platform
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}
        >
          A modern micro frontend application built with React, Vite, and Module
          Federation
        </p>

        {!isAuthenticated ? (
          <div>
            <p
              style={{
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                opacity: 0.9,
              }}
            >
              Please login to start shopping
            </p>
            <Link
              to="/login"
              style={{
                ...buttonStyle,
                backgroundColor: '#ffffff',
                color: '#667eea',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 6px 20px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <div>
            <p
              style={{
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                opacity: 0.9,
              }}
            >
              Start exploring our products!
            </p>
            <Link
              to="/products"
              style={{
                ...buttonStyle,
                backgroundColor: '#28a745',
                color: '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 6px 20px rgba(40, 167, 69, 0.4)';
                e.currentTarget.style.backgroundColor = '#218838';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = '#28a745';
              }}
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '3rem',
            fontWeight: 600,
            color: isDark ? '#ffffff' : '#333',
          }}
        >
          Platform Features
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: '2rem',
                backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
                borderRadius: '12px',
                border: `1px solid ${isDark ? '#404040' : '#e0e0e0'}`,
                transition: 'all 0.3s ease',
                boxShadow: isDark
                  ? '0 2px 8px rgba(0, 0, 0, 0.2)'
                  : '0 2px 8px rgba(0, 0, 0, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = isDark
                  ? '0 8px 24px rgba(0, 0, 0, 0.3)'
                  : '0 8px 24px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = isDark ? '#555' : '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDark
                  ? '0 2px 8px rgba(0, 0, 0, 0.2)'
                  : '0 2px 8px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = isDark
                  ? '#404040'
                  : '#e0e0e0';
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '0.75rem',
                  fontWeight: 600,
                  color: isDark ? '#ffffff' : '#333',
                  textAlign: 'center',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  color: isDark ? '#b0b0b0' : '#666',
                  lineHeight: 1.6,
                  textAlign: 'center',
                  margin: 0,
                }}
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
