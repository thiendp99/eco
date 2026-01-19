import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

  if (email === 'admin@test.com' && password === 'admin123') {
    return {
      id: '1',
      name: 'Admin User',
      email: 'admin@test.com',
      role: 'admin',
    };
  }

  if (email === 'user@test.com' && password === 'user123') {
    return {
      id: '2',
      name: 'Regular User',
      email: 'user@test.com',
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
      name: 'auth-storage', // LocalStorage key
    }
  )
);
