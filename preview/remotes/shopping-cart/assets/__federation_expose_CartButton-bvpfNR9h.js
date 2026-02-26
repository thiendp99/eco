import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { useCartStore } from './__federation_expose_CartStore-BpJHBzYR.js';
import { u as useThemeStore } from './cartStore-YA_9fnib.js';

const CartButton = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: toggleCart,
      className: `
        relative h-10 px-4 rounded-full text-sm font-medium
        flex items-center gap-2 transition
        ${isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-900 text-white hover:bg-gray-800"}
      `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🛒" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cart" }),
        totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "\n            absolute -top-1 -right-1 min-w-[18px] h-[18px]\n            rounded-full bg-red-500 text-white\n            text-[11px] leading-[18px] text-center\n          ",
            children: totalItems > 99 ? "99+" : totalItems
          }
        )
      ]
    }
  );
};

export { CartButton as default };
