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
        className: "w-20 h-20 object-cover rounded-lg border-gray-200 dark:border-gray-700"
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

export { CartItemComponent as C };
