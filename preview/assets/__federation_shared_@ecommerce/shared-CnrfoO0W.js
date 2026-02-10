import { i as importShared } from '../_virtual___federation_fn_import-CaENf_Oj.js';
import { p as persist } from '../middleware-mWdplJB5.js';

const {create} = await importShared('zustand');
const useThemeStore = create()(persist((set) => ({
    theme: 'light',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    setTheme: (theme) => set({ theme }),
}), {
    name: 'theme-storage',
}));

export { useThemeStore };
