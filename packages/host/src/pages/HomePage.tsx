import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useThemeStore } from '@ecommerce/shared';
import {
  Box,
  Zap,
  Database,
  Activity,
  Moon,
  Layout,
  ArrowRight,
  User,
} from 'lucide-react';

const features = [
  {
    icon: <Box className="w-6 h-6" />,
    title: 'Micro Frontend Architecture',
    description:
      'Built with Module Federation for scalable, independent deployments',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Blazing Fast',
    description: 'Powered by Vite for lightning-fast development and builds',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'State Management',
    description: 'React Query for server state, Zustand for client state',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Testing Ready',
    description: 'Vitest for unit tests, Playwright for E2E testing',
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: 'Theme Support',
    description: 'Dark and light themes with persistent preferences',
  },
  {
    icon: <Layout className="w-6 h-6" />,
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
    <div className="max-w-6xl mx-auto px-4 pb-20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 flex flex-col items-center text-center animate-fade-in">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors hover:bg-indigo-500/20 border-indigo-500/30 bg-indigo-500/10 text-indigo-500 font-medium text-sm mb-8 animate-fade-up delay-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen Microfrontend
        </div>

        <h1
          className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-fade-up delay-200 ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Welcome to the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 pb-2 inline-block">
            E-Commerce Platform
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl max-w-2xl mb-12 animate-fade-up delay-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
        >
          A modern retail experience built with React, Vite, and Module
          Federation. Discover seamless shopping across decentralized
          micro-applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-400">
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="group relative px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Sign In to Shop</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              to="/products"
              className="group relative px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Browse Products</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          <a
            href="https://github.com/thiendp99"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto ${
              isDark
                ? 'border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
                : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <User className="w-5 h-5" />
            View My Profile
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="animate-fade-up delay-500">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Enterprise-Grade Architecture
          </h2>
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            Engineered for performance, scalability, and developer experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 animate-fade-up ${
                isDark
                  ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgba(79,70,229,0.15)]'
                  : 'bg-white border-slate-200 hover:border-indigo-500/30 hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)]'
              }`}
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isDark
                    ? 'bg-slate-800 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300'
                    : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}
              >
                {feature.title}
              </h3>
              <p
                className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
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
