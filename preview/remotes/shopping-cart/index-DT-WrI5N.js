import { importShared } from './__federation_fn_import-C1zXSXSr.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { r as reactDomExports } from './index-COvqqES_.js';
import Cart, { C as CartItemComponent } from './__federation_expose_Cart-6x9FyRN0.js';
import CartButton from './__federation_expose_CartButton-bvpfNR9h.js';
import { useCartStore } from './__federation_expose_CartStore-BpJHBzYR.js';
import { u as useThemeStore } from './cartStore-YA_9fnib.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

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

const React = await importShared('react');
const mockProducts = [
  {
    id: "1",
    name: "Laptop Dell XPS 15",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
    stock: 15
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1739617148480-f7bb4eb33c2d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25
  }
];
const TestApp = () => {
  const addItem = useCartStore((state) => state.addItem);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50 text-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-medium tracking-tight", children: "Shopping Cart Playground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartButton, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium mb-4", children: "Test products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: mockProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between gap-4 p-4 rounded-xl border bg-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: product.image,
                    alt: product.name,
                    className: "w-16 h-16 rounded-lg object-cover border"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: product.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500", children: [
                    "$",
                    product.price.toFixed(2)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => addItem(product),
                  className: "\n                    px-4 py-2 rounded-lg text-sm font-medium\n                    bg-gray-900 text-white\n                    hover:bg-gray-800 transition\n                  ",
                  children: "Add to cart"
                }
              )
            ]
          },
          product.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Cart, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
  ] });
};
const rootElement = document.getElementById("root");
if (rootElement) {
  client.createRoot(rootElement).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestApp, {}) })
  );
}
