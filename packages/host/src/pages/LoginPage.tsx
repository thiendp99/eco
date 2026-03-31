import { useState } from 'react';
import { Navigate, useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { TEST_ACCOUNTS } from '../constants/testAccounts';
import { useThemeStore } from '@ecommerce/shared';
import { Mail, Lock, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  // Redirect to the page user originally wanted, or /products
  const from =
    (location.state as { from?: Location })?.from?.pathname ?? '/products';

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>

      {/* Left Pane - Form */}
      <div className="w-full flex items-center justify-center p-8 sm:p-12 lg:p-24 relative overflow-y-auto">
        <div className="absolute top-8 left-8">
          <Link to="/" className={`flex items-center gap-2 text-sm font-medium transition-colors hover:-translate-x-1 ${isDark ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-md animate-fade-in">
          <div className="mb-10 text-center lg:text-left">
            <h2 className={`text-4xl font-extrabold tracking-tight mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Welcome Back
            </h2>
            <p className={`text-lg flex flex-col items-center lg:items-start ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              <span>Please sign in to your account</span>
            </p>
          </div>

          {/* Auto-fill Helper */}
          <div className="flex justify-end mb-6 animate-fade-up delay-100">
            <button
              type="button"
              onClick={() => {
                if (TEST_ACCOUNTS.length > 0) {
                  setEmail(TEST_ACCOUNTS[0].email);
                  setPassword(TEST_ACCOUNTS[0].password);
                }
              }}
              className={`text-sm font-semibold transition-colors hover:underline flex items-center gap-1.5 ${
                isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Auto-fill Demo Admin
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up delay-200">
            {/* Email */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 ${isDark ? 'text-slate-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className={`w-full rounded-xl pl-11 pr-4 py-3.5 text-sm transition-all outline-none focus:ring-2 ${isDark
                    ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className={`h-5 w-5 ${isDark ? 'text-slate-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className={`w-full rounded-xl pl-11 pr-4 py-3.5 text-sm transition-all outline-none focus:ring-2 ${isDark
                    ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className={`rounded-xl px-4 py-3 text-sm flex items-center gap-2 animate-fade-in ${isDark ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-red-50 border border-red-200 text-red-600'
                }`}>
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`
                group relative w-full flex justify-center items-center gap-2 rounded-xl py-4 text-sm font-bold text-white
                transition-all duration-300 overflow-hidden outline-none mt-4
                ${loading
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:-translate-y-0.5'
                }
              `}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">{loading ? 'Authenticating...' : 'Sign In Securely'}</span>
              {!loading && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
