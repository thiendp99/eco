export const TEST_ACCOUNTS = [
  {
    role: 'Admin',
    email: 'admin@test.com',
    password: 'admin123',
  },
  {
    role: 'User',
    email: 'user@test.com',
    password: 'user123',
  },
] as const;

export type TestAccount = (typeof TEST_ACCOUNTS)[number];
