import { importShared } from './__federation_fn_import-Cs4znd9T.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import ProductDetail, { _ as __federation_method_getRemote, u as useCategories, a as useProducts } from './__federation_expose_ProductDetail-C82zm1ag.js';

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {createContext,useContext,useMemo,createElement: createElement$2} = await importShared('react');


const LucideContext = createContext({});
const useLucideContext = () => useContext(LucideContext);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef: forwardRef$1,createElement: createElement$1} = await importShared('react');

const Icon = forwardRef$1(
  ({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return createElement$1(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size ?? contextSize ?? defaultAttributes.width,
        height: size ?? contextSize ?? defaultAttributes.height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: mergeClasses("lucide", contextClass, className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement$1(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef,createElement} = await importShared('react');

const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$7);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$6);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$5);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$4);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
];
const SearchX = createLucideIcon("search-x", __iconNode$3);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode$2);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);

const __federation_var_shoppingCartCartStore = await __federation_method_getRemote("shoppingCart" , "./CartStore");
 let {useCartStore} = __federation_var_shoppingCartCartStore;
const {useThemeStore: useThemeStore$2} = await importShared('@ecommerce/shared');
const ProductCard = ({
  product,
  onViewDetails,
  style,
  className = ""
}) => {
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
      style,
      onClick: () => onViewDetails(product.id),
      className: `
        group relative cursor-pointer
        flex flex-col h-full
        rounded-2xl overflow-hidden
        transition-all duration-300 ease-out
        transform hover:-translate-y-1
        ${isDark ? "bg-slate-900 border border-slate-800 hover:border-slate-600 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]" : "bg-white border border-gray-100 hover:border-indigo-100/50 hover:shadow-[0_8px_30px_rgba(79,70,229,0.08)]"}
        ${className}
      `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative w-full aspect-[4/5] overflow-hidden ${isDark ? "bg-slate-800" : "bg-gray-50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: product.image,
                  alt: product.name,
                  className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handleAddToCart,
                  disabled: !isStockAvailable,
                  className: `
              pointer-events-auto
              relative w-full py-3 px-4 rounded-xl text-sm font-bold
              transition-all duration-300 overflow-hidden flex items-center justify-center gap-2
              ${isStockAvailable ? isDark ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_4px_20px_rgba(79,70,229,0.3)]" : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500"}
            `,
                  children: [
                    isStockAvailable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 flex items-center gap-2", children: isStockAvailable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                      "Add to Cart"
                    ] }) : "Out of Stock" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-2", children: [
                !isStockAvailable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold tracking-wide shadow-lg backdrop-blur-md", children: "SOLD OUT" }),
                isStockAvailable && product.stock < 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-bold tracking-wide shadow-lg backdrop-blur-md", children: [
                  "ONLY ",
                  product.stock,
                  " LEFT"
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-grow relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `text-xs uppercase tracking-wider font-bold mb-2 ${isDark ? "text-indigo-400" : "text-indigo-600"}`,
              children: product.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: `
            text-base font-semibold leading-snug mb-3
            line-clamp-2 min-h-[3rem]
            transition-colors duration-200
            ${isDark ? "text-slate-200 group-hover:text-indigo-300" : "text-slate-900 group-hover:text-indigo-700"}
          `,
              title: product.name,
              children: product.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: `w-4 h-4 ${isDark ? "text-amber-400 fill-amber-400/20" : "text-amber-500 fill-amber-500/20"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-sm font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`,
                  children: product.rating?.toFixed(1) || "0.0"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `text-lg font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`,
                children: formattedPrice
              }
            )
          ] })
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[60vh] p-8 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `max-w-md w-full p-8 md:p-12 text-center rounded-3xl border shadow-xl ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-red-100"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-500"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-10 h-10" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: `text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`,
              children: "Oops! Error loading products"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-base ${isDark ? "text-slate-400" : "text-gray-500"}`,
              children: error instanceof Error ? error.message : "Something went wrong while connecting to our servers. Please try again later."
            }
          )
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `min-h-screen transition-colors duration-300 ${isDark ? "bg-slate-950" : "bg-gray-50"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 lg:mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: `text-xl lg:text-2xl font-extrabold tracking-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`,
              children: "Discover Products"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-lg font-medium ${isDark ? "text-indigo-400" : "text-indigo-600"}`,
              children: isLoading ? "Loading catalog..." : `${data?.total || 0} premium items available`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-up delay-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductFilters, { filters, onFiltersChange: setFilters }) }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[50vh] animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LoaderCircle,
            {
              className: `w-12 h-12 animate-spin mb-4 ${isDark ? "text-indigo-400" : "text-indigo-600"}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `text-sm font-medium ${isDark ? "text-slate-400" : "text-gray-500"}`,
              children: "Fetching our best products..."
            }
          )
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          data?.products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24 animate-fade-up delay-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center rotate-3 transition-transform hover:rotate-6 ${isDark ? "bg-slate-800 text-slate-400" : "bg-indigo-50 text-indigo-400"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchX, { className: "w-12 h-12" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`,
                children: "No products found"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-base mb-8 max-w-md mx-auto ${isDark ? "text-slate-400" : "text-gray-500"}`,
                children: "We couldn't find anything matching your current filters. Try adjusting your search criteria."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setFilters({}),
                className: `
                    px-8 py-3.5 rounded-full text-sm font-bold tracking-wide
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    ${isDark ? "bg-white text-gray-900 hover:bg-slate-200" : "bg-indigo-600 text-white hover:bg-indigo-700"}
                  `,
                children: "Clear all filters"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `text-sm font-bold uppercase tracking-wider ${isDark ? "text-slate-500" : "text-gray-500"}`,
                  children: [
                    "Showing ",
                    data?.products.length,
                    " of ",
                    data?.total,
                    " results"
                  ]
                }
              ),
              isFetching && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full ${isDark ? "bg-slate-800 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                    "Updating catalog..."
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-testid": "product-grid",
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16",
                children: data?.products.map((product, index) => {
                  const staggerDelayClass = `delay-${Math.min(index % 6 * 100, 500)}`;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ProductCard,
                    {
                      product,
                      onViewDetails: handleViewDetails,
                      className: `animate-fade-up ${staggerDelayClass}`
                    },
                    product.id
                  );
                })
              }
            )
          ] }),
          data && data.totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center justify-center gap-2 py-10 border-t ${isDark ? "border-slate-800" : "border-gray-200"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setPage((p) => Math.max(1, p - 1)),
                    disabled: page === 1,
                    className: `
                    p-3 rounded-full flex items-center justify-center
                    transition-all duration-200
                    ${page === 1 ? isDark ? "text-slate-600 cursor-not-allowed bg-slate-900" : "text-gray-300 cursor-not-allowed bg-gray-50" : isDark ? "text-white hover:bg-slate-800 bg-slate-900" : "text-gray-700 hover:bg-gray-100 bg-white shadow-sm border border-gray-100"}
                  `,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 px-2", children: [...Array(data.totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  if (pageNum === 1 || pageNum === data.totalPages || pageNum >= page - 1 && pageNum <= page + 1) {
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => setPage(pageNum),
                        className: `
                            min-w-[40px] h-[40px] flex items-center justify-center text-sm font-bold
                            transition-all duration-200 rounded-full
                            ${page === pageNum ? isDark ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]" : "bg-indigo-600 text-white shadow-md" : isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"}
                          `,
                        children: pageNum
                      },
                      pageNum
                    );
                  } else if (pageNum === page - 2 || pageNum === page + 2) {
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `px-1 ${isDark ? "text-slate-600" : "text-gray-400"}`,
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
                    p-3 rounded-full flex items-center justify-center
                    transition-all duration-200
                    ${page === data.totalPages ? isDark ? "text-slate-600 cursor-not-allowed bg-slate-900" : "text-gray-300 cursor-not-allowed bg-gray-50" : isDark ? "text-white hover:bg-slate-800 bg-slate-900" : "text-gray-700 hover:bg-gray-100 bg-white shadow-sm border border-gray-100"}
                  `,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
                  }
                )
              ]
            }
          )
        ] }),
        selectedProductId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 overflow-y-auto w-full h-full flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `fixed inset-0 backdrop-blur-md transition-opacity duration-300 ${isDark ? "bg-slate-950/80" : "bg-slate-900/40"}`,
              onClick: handleCloseDetail
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full px-4 sm:px-6 flex items-center justify-center min-h-screen my-8 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `
                relative max-w-5xl w-full mx-auto overflow-hidden
                rounded-[2rem] shadow-2xl ring-1
                ${isDark ? "bg-slate-900 ring-white/10" : "bg-white ring-black/5"}
              `,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: handleCloseDetail,
                    className: `
                    absolute top-6 right-6 z-20 p-2.5 rounded-full backdrop-blur-lg
                    transition-all duration-200 hover:scale-110
                    ${isDark ? "bg-black/20 text-slate-300 hover:text-white hover:bg-black/40 border border-white/10" : "bg-white/80 text-gray-500 hover:text-gray-900 hover:bg-white border border-gray-200 shadow-sm"}
                  `,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-0 max-h-[85vh] overflow-y-auto scrollbar-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductDetail, { productId: selectedProductId }) })
              ]
            }
          ) })
        ] })
      ] })
    }
  );
};

export { ProductList as default };
