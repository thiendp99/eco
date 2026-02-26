import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { useCartStore } from './__federation_expose_CartStore-BpJHBzYR.js';
import { u as useThemeStore } from './cartStore-YA_9fnib.js';

const CartItemComponent = ({ item }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= item.stock) {
      updateQuantity(item.id, newQuantity);
    }
  };
  const itemTotal = item.price * item.quantity;
  const isMaxQuantity = item.quantity >= item.stock;
  const isMinQuantity = item.quantity <= 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 px-6 py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: item.image,
        alt: item.name,
        className: "w-20 h-20 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h4",
        {
          className: `text-sm font-medium mb-1 ${isDark ? "text-white" : "text-gray-900"}`,
          children: item.name
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 mb-3", children: [
        "$",
        item.price.toFixed(2)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border rounded-md overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleQuantityChange(item.quantity - 1),
              disabled: isMinQuantity,
              className: "w-8 h-8 text-sm hover:bg-gray-100 disabled:opacity-40",
              children: "−"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: item.quantity,
              onChange: (e) => handleQuantityChange(parseInt(e.target.value) || 1),
              min: "1",
              max: item.stock,
              className: "w-10 text-center text-sm bg-transparent"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleQuantityChange(item.quantity + 1),
              disabled: isMaxQuantity,
              className: "w-8 h-8 text-sm hover:bg-gray-100 disabled:opacity-40",
              children: "+"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => removeItem(item.id),
            className: "text-xs text-gray-500 hover:text-red-600",
            children: "Remove"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`,
        children: [
          "$",
          itemTotal.toFixed(2)
        ]
      }
    )
  ] });
};

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

export { CartItemComponent as C, Cart as default };
