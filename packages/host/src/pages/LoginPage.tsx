import { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { TEST_ACCOUNTS } from '../constants/testAccounts';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">Sign in</h2>
            <p className="text-sm text-gray-500">
              Welcome back, please login to your account
            </p>
          </div>

          {/* Test Accounts */}
          <div className="mb-6 rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
            <div className="font-medium text-gray-900 mb-1">Test Accounts</div>
            {TEST_ACCOUNTS.map((account) => (
              <div key={account.role} className="text-gray-600">
                {account.role}:{' '}
                <span className="font-mono">{account.email}</span> /{' '}
                <span className="font-mono">{account.password}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="
              w-full rounded-lg border border-gray-300
              px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900
            "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="
              w-full rounded-lg border border-gray-300
              px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900
            "
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`
            w-full rounded-lg py-3 text-sm font-medium
            transition-all duration-200
            ${
              loading
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }
          `}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
