import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { useCartStore } from './__federation_expose_CartStore-BpJHBzYR.js';
import { u as useThemeStore } from './cartStore-YA_9fnib.js';
import { C as CartItemComponent } from './CartItem-PRwzOukr.js';

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const handleCheckout = () => {
    alert(`Checkout ${totalItems} items for $${totalPrice.toFixed(2)}`);
  };
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[60vh] px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `
            max-w-md w-full p-10 rounded-2xl text-center border
            ${isDark ? "bg-gray-900 border-gray-800 text-gray-300" : "bg-white border-gray-200 text-gray-600"}
          `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-6", children: "🛒" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: `text-2xl font-medium mb-3 ${isDark ? "text-white" : "text-gray-900"}`,
              children: "Your cart is empty"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", children: "Looks like you haven’t added anything yet." })
        ]
      }
    ) });
  }
  const subtotal = totalPrice;
  const tax = totalPrice * 0.1;
  const total = totalPrice * 1.1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: `text-2xl font-medium ${isDark ? "text-white" : "text-gray-900"}`,
          children: "Shopping Cart"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: clearCart,
          className: "text-sm text-red-500 hover:underline",
          children: "Clear cart"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `
              rounded-xl border overflow-hidden
              ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}
            `,
          children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemComponent, { item }),
            index < items.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "hr",
              {
                className: isDark ? "border-gray-800" : "border-gray-100"
              }
            )
          ] }, item.id))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `
            p-6 rounded-xl border h-fit
            ${isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}
          `,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `text-lg font-medium mb-6 ${isDark ? "text-white" : "text-gray-900"}`,
                children: "Order summary"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: isDark ? "text-white" : "text-gray-900", children: [
                  "$",
                  subtotal.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Tax" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: isDark ? "text-white" : "text-gray-900", children: [
                  "$",
                  tax.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: isDark ? "border-gray-800" : "border-gray-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDark ? "text-white" : "text-gray-900", children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: isDark ? "text-white" : "text-gray-900", children: [
                  "$",
                  total.toFixed(2)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleCheckout,
                className: `
              mt-8 w-full py-3 text-sm font-medium transition
              ${isDark ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}
            `,
                children: "Checkout"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `mt-3 text-xs text-center ${isDark ? "text-gray-500" : "text-gray-500"}`,
                children: "Secure checkout"
              }
            )
          ]
        }
      )
    ] })
  ] });
};

export { Cart as default };
