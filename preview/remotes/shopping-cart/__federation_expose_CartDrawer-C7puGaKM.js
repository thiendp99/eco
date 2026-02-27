import { importShared } from './__federation_fn_import-C1zXSXSr.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { useCartStore } from './__federation_expose_CartStore-BpJHBzYR.js';
import { u as useThemeStore } from './cartStore-YA_9fnib.js';
import { C as CartItemComponent } from './CartItem-PRwzOukr.js';

const {useEffect} = await importShared('react');

const CartDrawer = () => {
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) closeCart();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeCart]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  const tax = totalPrice * 0.1;
  const total = totalPrice + tax;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: closeCart, className: "fixed inset-0 bg-black/40 z-[999]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `
          fixed top-0 right-0 bottom-0 w-full max-w-sm z-[1000]
          flex flex-col border-l
          ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}
        `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: `text-base font-medium ${isDark ? "text-white" : "text-gray-900"}`,
                  children: "Cart"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                totalItems,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: closeCart,
                className: "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🛒" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Your cart is empty" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-100 dark:divide-gray-800", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemComponent, { item }, item.id)) }) }),
          items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-gray-200 dark:border-gray-800", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: isDark ? "text-white" : "text-gray-900", children: [
                  "$",
                  totalPrice.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Tax" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: isDark ? "text-white" : "text-gray-900", children: [
                  "$",
                  tax.toFixed(2)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                total.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  closeCart();
                  alert("Checkout");
                },
                className: `
                w-full py-3 text-sm font-medium transition
                ${isDark ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}
              `,
                children: "Checkout"
              }
            )
          ] })
        ]
      }
    )
  ] });
};

export { CartDrawer as default };
