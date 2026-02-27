import { importShared } from './__federation_fn_import-Cs4znd9T.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import ProductDetail, { _ as __federation_method_getRemote, u as useCategories, a as useProducts } from './__federation_expose_ProductDetail-DLyZYxeA.js';

const __federation_var_shoppingCartCartStore = await __federation_method_getRemote("shoppingCart" , "./CartStore");
 let {useCartStore} = __federation_var_shoppingCartCartStore;
const {useThemeStore: useThemeStore$2} = await importShared('@ecommerce/shared');

const ProductCard = ({ product, onViewDetails }) => {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const { theme } = useThemeStore$2();
  const isDark = theme === "dark";
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product);
    openCart();
  };
  const isStockAvailable = product.stock > 0;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(product.price);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      onClick: () => onViewDetails(product.id),
      className: `
        group relative cursor-pointer
        flex flex-col h-full
        rounded-xl overflow-hidden
        transition-all duration-300 ease-out
        ${isDark ? "bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 hover:border-gray-600" : "bg-white hover:shadow-xl border border-gray-100 hover:border-gray-200"}
      `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleAddToCart,
              disabled: !isStockAvailable,
              className: `
              w-full py-2.5 px-4 rounded-lg text-sm font-medium
              transition-all duration-200
              ${isStockAvailable ? isDark ? "bg-white text-gray-900 hover:bg-gray-100 shadow-lg" : "bg-gray-900 text-white hover:bg-gray-800 shadow-lg" : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600"}
            `,
              children: isStockAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 4v16m8-8H4"
                      }
                    )
                  }
                ),
                "Add to Cart"
              ] }) : "Sold Out"
            }
          ) }),
          !isStockAvailable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-semibold shadow-lg", children: "Sold Out" }),
          isStockAvailable && product.stock < 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-semibold shadow-lg", children: [
            "Only ",
            product.stock,
            " Left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-grow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `text-xs uppercase tracking-wider font-semibold mb-2 ${isDark ? "text-gray-500" : "text-gray-500"}`,
              children: product.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: `
            text-base font-medium leading-tight mb-3
            line-clamp-2 min-h-[2.5rem]
            transition-colors duration-200
            ${isDark ? "text-white group-hover:text-blue-400" : "text-gray-900 group-hover:text-blue-600"}
          `,
              title: product.name,
              children: product.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: `w-4 h-4 ${i < Math.floor(product.rating || 0) ? "text-amber-400 fill-current" : isDark ? "text-gray-700" : "text-gray-300"}`,
                fill: i < Math.floor(product.rating || 0) ? "currentColor" : "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  }
                )
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`,
                children: product.rating?.toFixed(1) || "0.0"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`,
              children: formattedPrice
            }
          ) })
        ] })
      ]
    }
  );
};

const {useState: useState$1,useEffect: useEffect$1} = await importShared('react');
const {useThemeStore: useThemeStore$1} = await importShared('@ecommerce/shared');

const ProductFilters = ({
  filters,
  onFiltersChange
}) => {
  const { data: categories } = useCategories();
  const [localFilters, setLocalFilters] = useState$1(filters);
  const [isOpen, setIsOpen] = useState$1(false);
  const { theme } = useThemeStore$1();
  const isDark = theme === "dark";
  useEffect$1(() => {
    setLocalFilters(filters);
  }, [filters]);
  const handleApply = () => {
    onFiltersChange(localFilters);
    setIsOpen(false);
  };
  const handleReset = () => {
    const emptyFilters = {};
    setLocalFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };
  const hasActiveFilters = Object.keys(localFilters).some(
    (key) => localFilters[key]
  );
  const activeFiltersCount = Object.keys(localFilters).filter(
    (key) => localFilters[key]
  ).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: `
            w-full py-3 px-4 flex items-center justify-between
            rounded-xl border transition-all duration-200
            text-sm font-medium
            ${isDark ? "border-gray-700 bg-gray-800/50 text-white hover:bg-gray-800" : "border-gray-200 bg-white text-gray-900 hover:border-gray-300 shadow-sm hover:shadow"}
          `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "w-5 h-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  }
                )
              }
            ),
            "Filters"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `
                px-2.5 py-1 rounded-full text-xs font-semibold
                ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"}
              `,
                children: activeFiltersCount
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: `w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${isDark ? "text-gray-400" : "text-gray-500"}`,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7"
                  }
                )
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `
        ${isOpen ? "block" : "hidden"}
        transition-all duration-200
      `,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `
          rounded-xl border p-6
          ${isDark ? "border-gray-700 bg-gray-800/30 backdrop-blur-sm" : "border-gray-200 bg-white shadow-sm"}
        `,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: `text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`,
                      children: "Filters"
                    }
                  ),
                  hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `
                  px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"}
                `,
                      children: [
                        activeFiltersCount,
                        " active"
                      ]
                    }
                  )
                ] }),
                hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: handleReset,
                    className: `
                  text-sm font-medium transition-colors duration-200
                  flex items-center gap-1.5
                  ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}
                `,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          className: "w-4 h-4",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M6 18L18 6M6 6l12 12"
                            }
                          )
                        }
                      ),
                      "Clear all"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "search-input",
                    className: `block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-600"}`,
                    children: "Search Products"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "svg",
                    {
                      className: `absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? "text-gray-500" : "text-gray-400"}`,
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "search-input",
                      type: "text",
                      value: localFilters.search || "",
                      onChange: (e) => setLocalFilters({ ...localFilters, search: e.target.value }),
                      placeholder: "Search by name, category...",
                      className: `
                  w-full pl-11 pr-4 py-3 rounded-xl border text-sm
                  transition-all duration-200
                  focus:outline-none focus:ring-2
                  ${isDark ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300"}
                `
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "category",
                      className: `block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-600"}`,
                      children: "Category"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "category",
                        value: localFilters.category || "",
                        onChange: (e) => setLocalFilters({
                          ...localFilters,
                          category: e.target.value || void 0
                        }),
                        className: `
                    w-full pl-4 pr-10 py-3 rounded-xl border text-sm
                    appearance-none cursor-pointer
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    ${isDark ? "bg-gray-900/50 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600" : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300"}
                  `,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All categories" }),
                          categories?.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat, children: cat }, cat))
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: `absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? "text-gray-500" : "text-gray-400"}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                          }
                        )
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "sort-by",
                      className: `block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-600"}`,
                      children: "Sort By"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "sort-by",
                        value: localFilters.sortBy || "",
                        onChange: (e) => setLocalFilters({
                          ...localFilters,
                          sortBy: e.target.value || void 0
                        }),
                        className: `
                    w-full pl-4 pr-10 py-3 rounded-xl border text-sm
                    appearance-none cursor-pointer
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    ${isDark ? "bg-gray-900/50 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600" : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300"}
                  `,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Featured" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price", children: "Price" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", children: "Rating" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: `absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? "text-gray-500" : "text-gray-400"}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                          }
                        )
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "price-range",
                      className: `block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-600"}`,
                      children: "Price Range"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium ${isDark ? "text-gray-500" : "text-gray-400"}`,
                          children: "$"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "price-range",
                          type: "number",
                          value: localFilters.minPrice || "",
                          onChange: (e) => setLocalFilters({
                            ...localFilters,
                            minPrice: e.target.value ? Number(e.target.value) : void 0
                          }),
                          placeholder: "Min",
                          min: "0",
                          className: `
                      w-full pl-8 pr-4 py-3 rounded-xl border text-sm
                      transition-all duration-200
                      focus:outline-none focus:ring-2
                      ${isDark ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300"}
                    `
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-sm font-medium ${isDark ? "text-gray-600" : "text-gray-400"}`,
                        children: "—"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium ${isDark ? "text-gray-500" : "text-gray-400"}`,
                          children: "$"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "number",
                          value: localFilters.maxPrice || "",
                          onChange: (e) => setLocalFilters({
                            ...localFilters,
                            maxPrice: e.target.value ? Number(e.target.value) : void 0
                          }),
                          placeholder: "Max",
                          min: "0",
                          className: `
                      w-full pl-8 pr-4 py-3 rounded-xl border text-sm
                      transition-all duration-200
                      focus:outline-none focus:ring-2
                      ${isDark ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300"}
                    `
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "order",
                      className: `block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-600"}`,
                      children: "Order"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "order",
                        value: localFilters.sortOrder || "asc",
                        onChange: (e) => setLocalFilters({
                          ...localFilters,
                          sortOrder: e.target.value
                        }),
                        className: `
                    w-full pl-4 pr-10 py-3 rounded-xl border text-sm
                    appearance-none cursor-pointer
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    ${isDark ? "bg-gray-900/50 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600" : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300"}
                  `,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "asc", children: "Low to High" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "desc", children: "High to Low" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: `absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? "text-gray-500" : "text-gray-400"}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                          }
                        )
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleApply,
                  className: `
                w-full py-3 px-6 rounded-xl
                text-sm font-semibold transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isDark ? "bg-white text-gray-900 hover:bg-gray-100 shadow-lg" : "bg-gray-900 text-white hover:bg-gray-800 shadow-lg"}`,
                  children: "Apply Filters"
                }
              ) })
            ]
          }
        )
      }
    )
  ] });
};

const {useEffect,useState} = await importShared('react');
const {useThemeStore} = await importShared('@ecommerce/shared');

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(
    null
  );
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  useEffect(() => {
    setPage(1);
  }, [filters]);
  const { data, isLoading, error, isFetching } = useProducts(page, 6, filters);
  const handleViewDetails = (id) => {
    setSelectedProductId(id);
  };
  const handleCloseDetail = () => {
    setSelectedProductId(null);
  };
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[60vh] p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `max-w-md p-8 text-center ${isDark ? "bg-gray-900" : "bg-white"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "⚠️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: `text-xl font-medium mb-2 ${isDark ? "text-white" : "text-gray-900"}`,
              children: "Error loading products"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`,
              children: error instanceof Error ? error.message : "Something went wrong"
            }
          )
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `min-h-screen ${isDark ? "bg-gray-950" : "bg-white"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: `text-3xl lg:text-4xl font-normal mb-3 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`,
          children: "All Products"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          className: `text-base ${isDark ? "text-gray-400" : "text-gray-600"}`,
          children: [
            data?.total || 0,
            " products"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFilters, { filters, onFiltersChange: setFilters }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `
                w-12 h-12 mx-auto mb-4 rounded-full
                border-2 border-t-transparent animate-spin
                ${isDark ? "border-gray-700" : "border-gray-300"}
              `
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`,
          children: "Loading products..."
        }
      )
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      data?.products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🔍" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: `text-xl font-medium mb-2 ${isDark ? "text-white" : "text-gray-900"}`,
            children: "No products found"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: `text-sm mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`,
            children: "Try adjusting your filters or search terms"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setFilters({}),
            className: `
                    px-6 py-2.5 text-sm font-medium
                    transition-colors duration-200
                    ${isDark ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}
                  `,
            children: "Clear all filters"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `text-sm uppercase tracking-wide ${isDark ? "text-gray-400" : "text-gray-600"}`,
              children: [
                "Showing ",
                data?.products.length,
                " of ",
                data?.total,
                " products"
              ]
            }
          ),
          isFetching && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-4 h-4 border-2 border-t-transparent rounded-full animate-spin ${isDark ? "border-gray-700" : "border-gray-300"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: isDark ? "text-gray-400" : "text-gray-600",
                children: "Updating..."
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-testid": "product-grid",
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-y-10 mb-12",
            children: data?.products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProductCard,
              {
                product,
                onViewDetails: handleViewDetails
              },
              product.id
            ))
          }
        )
      ] }),
      data && data.totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex items-center justify-center gap-2 py-8 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setPage((p) => Math.max(1, p - 1)),
                disabled: page === 1,
                className: `
                    px-4 py-2 text-sm font-medium
                    transition-colors duration-200
                    ${page === 1 ? isDark ? "text-gray-700 cursor-not-allowed" : "text-gray-300 cursor-not-allowed" : isDark ? "text-white hover:bg-gray-900" : "text-gray-900 hover:bg-gray-100"}
                  `,
                children: "Previous"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [...Array(data.totalPages)].map((_, i) => {
              const pageNum = i + 1;
              if (pageNum === 1 || pageNum === data.totalPages || pageNum >= page - 1 && pageNum <= page + 1) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setPage(pageNum),
                    className: `
                            min-w-[2.5rem] px-3 py-2 text-sm font-medium
                            transition-colors duration-200 rounded-md
                            ${page === pageNum ? isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white" : isDark ? "text-white hover:bg-gray-900" : "text-gray-900 hover:bg-gray-100"}
                          `,
                    children: pageNum
                  },
                  pageNum
                );
              } else if (pageNum === page - 2 || pageNum === page + 2) {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `px-2 ${isDark ? "text-gray-600" : "text-gray-400"}`,
                    children: "..."
                  },
                  pageNum
                );
              }
              return null;
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setPage((p) => Math.min(data.totalPages, p + 1)),
                disabled: page === data.totalPages,
                className: `
                    px-4 py-2 text-sm font-medium
                    transition-colors duration-200
                    ${page === data.totalPages ? isDark ? "text-gray-700 cursor-not-allowed" : "text-gray-300 cursor-not-allowed" : isDark ? "text-white hover:bg-gray-900" : "text-gray-900 hover:bg-gray-100"}
                  `,
                children: "Next"
              }
            )
          ]
        }
      )
    ] }),
    selectedProductId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 overflow-y-auto ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
          onClick: handleCloseDetail
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-screen flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `
                relative max-w-4xl w-full max-h-[90vh] overflow-hidden
                rounded-3xl shadow-2xl
                ${isDark ? "bg-gray-900" : "bg-white"}
              `,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleCloseDetail,
                className: `
                    absolute top-4 right-4 z-10 p-3 rounded-full
                    transition-colors duration-200
                    ${isDark ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"}
                  `,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-6 h-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 lg:p-8 max-h-[90vh] overflow-y-auto scrollbar-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetail, { productId: selectedProductId }) })
          ]
        }
      ) })
    ] })
  ] }) });
};

export { ProductList as default };
