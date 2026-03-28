import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TEST_ACCOUNTS } from '../constants/testAccounts';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

const mockLogin = async (email: string, password: string): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const adminAccount = TEST_ACCOUNTS.find((a) => a.role === 'Admin');
  if (email === adminAccount?.email && password === adminAccount?.password) {
    return {
      id: '1',
      name: 'Admin User',
      email: adminAccount.email,
      role: 'admin',
    };
  }

  const userAccount = TEST_ACCOUNTS.find((a) => a.role === 'User');
  if (email === userAccount?.email && password === userAccount?.password) {
    return {
      id: '2',
      name: 'Regular User',
      email: userAccount.email,
      role: 'user',
    };
  }

  throw new Error('Invalid credentials');
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        const user = await mockLogin(email, password);
        set({ user, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      setUser: (user) => {
        set({ user, isAuthenticated: true });
      },
    }),
    {
      name: 'auth-storage',
      // Gracefully skip persistence if localStorage is unavailable
      // (e.g., private browsing mode or storage quota exceeded)
      storage: {
        getItem: (name) => {
          try {
            const value = localStorage.getItem(name);
            return value ? JSON.parse(value) : null;
          } catch {
            return null;
          }
        },
        setItem: (name, value) => {
          try {
            localStorage.setItem(name, JSON.stringify(value));
          } catch {
            // Silently ignore write errors
          }
        },
        removeItem: (name) => {
          try {
            localStorage.removeItem(name);
          } catch {
            // Silently ignore remove errors
          }
        },
      },
    }
  )
);
