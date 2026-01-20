import { describe, it, expect, beforeEach } from 'vitest';
import { useAuthStore } from './authStore';

describe('AuthStore', () => {
  beforeEach(() => {
    useAuthStore.setState({ user: null, isAuthenticated: false });
  });

  it('should login successfully with valid credentials', async () => {
    const { login } = useAuthStore.getState();

    await login('admin@test.com', 'admin123');

    const { user, isAuthenticated } = useAuthStore.getState();
    expect(isAuthenticated).toBe(true);
    expect(user).toMatchObject({
      email: 'admin@test.com',
      role: 'admin',
    });
  });

  it('should fail login with invalid credentials', async () => {
    const { login } = useAuthStore.getState();

    await expect(login('wrong@test.com', 'wrong')).rejects.toThrow(
      'Invalid credentials'
    );
  });

  it('should logout user', () => {
    const { setUser, logout } = useAuthStore.getState();

    setUser({
      id: '1',
      name: 'Test User',
      email: 'test@test.com',
      role: 'user',
    });

    logout();

    const { user, isAuthenticated } = useAuthStore.getState();
    expect(isAuthenticated).toBe(false);
    expect(user).toBeNull();
  });
});
