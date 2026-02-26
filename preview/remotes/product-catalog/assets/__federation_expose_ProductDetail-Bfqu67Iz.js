import { importShared } from './__federation_fn_import-Cs4znd9T.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';

const remotesMap = {
'shoppingCart':{url:'./remotes/shopping-cart/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                const currentImports = {};

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'react':{'undefined':{get:()=>get(new URL('__federation_shared_react-BCcI129A.js', import.meta.url).href), loaded:1}},'react-dom':{'undefined':{get:()=>get(new URL('__federation_shared_react-dom-BN8Au471.js', import.meta.url).href), loaded:1}},'react-router-dom':{'undefined':{get:()=>get(new URL('__federation_shared_react-router-dom-D7IdJM8l.js', import.meta.url).href), loaded:1}},'@tanstack/react-query':{'undefined':{get:()=>get(new URL('__federation_shared_@tanstack/react-query-DGuY3lfx.js', import.meta.url).href), loaded:1}},'zustand':{'undefined':{get:()=>get(new URL('__federation_shared_zustand-DrDXPsjs.js', import.meta.url).href), loaded:1}},'@ecommerce/shared':{'undefined':{get:()=>get(new URL('__federation_shared_@ecommerce/shared-RGl-QjZP.js', import.meta.url).href), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule();
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Laptop Dell XPS 15",
    description: "Powerful laptop with 11th Gen Intel Core i7, 16GB RAM, 512GB SSD",
    price: 1299.99,
    category: "Electronics",
    image: "../assets/images/dell-xps-15-2023-1.webp",
    stock: 15,
    rating: 4.5,
    reviews: 128,
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    description: "Latest iPhone with A17 Pro chip, titanium design, 256GB",
    price: 999.99,
    category: "Electronics",
    image: "https://s13emagst.akamaized.net/products/60458/60457155/images/res_bc44fa0bbdf0de65a3c655809352aba9.jpg",
    stock: 25,
    rating: 4.8,
    reviews: 342,
    createdAt: "2024-02-01"
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise canceling headphones",
    price: 349.99,
    category: "Audio",
    image: "../assets/images/sony-wh.jpg",
    stock: 40,
    rating: 4.7,
    reviews: 256,
    createdAt: "2024-01-20"
  },
  {
    id: "4",
    name: "Samsung Galaxy S24 Ultra",
    description: "Flagship Android phone with S Pen, 200MP camera",
    price: 1199.99,
    category: "Electronics",
    image: "../assets/images/samsung-galaxy-s24.jpg",
    stock: 18,
    rating: 4.6,
    reviews: 315,
    createdAt: "2024-02-10"
  },
  {
    id: "5",
    name: "Apple Watch Series 9",
    description: "Advanced health and fitness tracking smartwatch",
    price: 399.99,
    category: "Wearables",
    image: "../assets/images/apple-watch-series-9.png",
    stock: 30,
    rating: 4.4,
    reviews: 175,
    createdAt: "2024-01-25"
  },
  {
    id: "6",
    name: 'iPad Pro 12.9"',
    description: "M2 chip, Liquid Retina XDR display, 512GB",
    price: 1099.99,
    category: "Tablets",
    image: "../assets/images/ipad-pro.jpg",
    stock: 12,
    rating: 4.7,
    reviews: 94,
    createdAt: "2024-02-05"
  },
  {
    id: "7",
    name: "Canon EOS R6",
    description: "Full-frame mirrorless camera with 20MP sensor",
    price: 2499.99,
    category: "Cameras",
    image: "https://i.imgur.com/J65l6hI.jpg",
    stock: 8,
    rating: 4.9,
    reviews: 67,
    createdAt: "2024-01-18"
  },
  {
    id: "8",
    name: "Nintendo Switch OLED",
    description: "Gaming console with vibrant OLED screen",
    price: 349.99,
    category: "Gaming",
    image: "https://i.imgur.com/3plW8A1.jpg",
    stock: 22,
    rating: 4.5,
    reviews: 312,
    createdAt: "2024-01-30"
  }
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchProducts = async (page = 1, pageSize = 12, filters) => {
  await delay(500);
  let filtered = [...MOCK_PRODUCTS];
  console.log("API: fetchProducts called", { page, filters });
  if (filters) {
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }
    if (filters.minPrice !== void 0) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice);
    }
    if (filters.maxPrice !== void 0) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice);
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)
      );
    }
  }
  if (filters?.sortBy) {
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "price":
          comparison = a.price - b.price;
          break;
        case "rating":
          comparison = a.rating - b.rating;
          break;
      }
      return filters.sortOrder === "desc" ? -comparison : comparison;
    });
  }
  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const products = filtered.slice(start, end);
  return {
    products,
    total,
    page,
    pageSize,
    totalPages
  };
};
const fetchProductById = async (id) => {
  await delay(300);
  const product = MOCK_PRODUCTS.find((p) => p.id === id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
const getCategories = async () => {
  await delay(200);
  const categories = [...new Set(MOCK_PRODUCTS.map((p) => p.category))];
  return categories;
};

const {useQuery,useQueryClient} = await importShared('@tanstack/react-query');
const productKeys = {
  all: ["products"],
  lists: () => [...productKeys.all, "list"],
  list: (page, filters) => [...productKeys.lists(), page, filters],
  details: () => [...productKeys.all, "detail"],
  detail: (id) => [...productKeys.details(), id],
  categories: ["categories"]
};
const useProducts = (page = 1, pageSize = 12, filters) => {
  console.log("useProducts", filters);
  return useQuery({
    queryKey: productKeys.list(page, filters),
    queryFn: () => fetchProducts(page, pageSize, filters),
    staleTime: 5 * 60 * 1e3,
    // 5 minutes
    // Keep previous data while fetching new page
    placeholderData: (previousData) => previousData
  });
};
const useProduct = (id) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => fetchProductById(id),
    staleTime: 10 * 60 * 1e3,
    // 10 minutes
    // Initial data từ list nếu có
    initialData: () => {
      const lists = queryClient.getQueriesData({
        queryKey: productKeys.lists()
      });
      for (const [, data] of lists) {
        if (data?.products) {
          const product = data.products.find((p) => p.id === id);
          if (product) return product;
        }
      }
      return void 0;
    }
  });
};
const useCategories = () => {
  return useQuery({
    queryKey: productKeys.categories,
    queryFn: getCategories,
    staleTime: 30 * 60 * 1e3
    // 30 minutes - categories don't change often
  });
};

const __federation_var_shoppingCartCartStore = await __federation_method_getRemote("shoppingCart" , "./CartStore");
 let {useCartStore} = __federation_var_shoppingCartCartStore;
const {useThemeStore} = await importShared('@ecommerce/shared');

const ProductDetail = ({ productId }) => {
  const { data: product, isLoading, error } = useProduct(productId);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const handleAddToCart = () => {
    if (product && product.stock > 0) {
      addItem(product);
      openCart();
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[60vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
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
          children: "Loading..."
        }
      )
    ] }) });
  }
  if (error || !product) {
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
              children: "Product not found"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`,
              children: error instanceof Error ? error.message : "The product you are looking for does not exist"
            }
          )
        ]
      }
    ) });
  }
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(product.price);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `min-h-screen ${isDark ? "bg-gray-950" : "bg-white"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-4 lg:py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: `hover:underline ${isDark ? "text-gray-400" : "text-gray-600"}`,
          children: "Home"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: isDark ? "text-gray-600" : "text-gray-400", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/products",
          className: `hover:underline ${isDark ? "text-gray-400" : "text-gray-600"}`,
          children: "Products"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: isDark ? "text-gray-600" : "text-gray-400", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: isDark ? "text-gray-400" : "text-gray-600", children: product.category })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.image,
            alt: product.name,
            className: "w-full h-full object-cover"
          }
        ),
        product.stock === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 px-3 py-1.5 bg-white text-gray-900 text-sm font-medium", children: "Sold out" }),
        product.stock > 0 && product.stock < 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 px-3 py-1.5 bg-amber-400 text-gray-900 text-sm font-medium", children: [
          "Only ",
          product.stock,
          " left"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `text-sm uppercase tracking-wider mb-3 ${isDark ? "text-gray-400" : "text-gray-500"}`,
            children: product.category
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: `text-3xl lg:text-4xl font-normal mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"}`,
            children: product.name
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-base ${i < Math.floor(product.rating) ? "text-yellow-400" : isDark ? "text-gray-700" : "text-gray-300"}`,
              children: "★"
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`,
              children: [
                product.rating,
                " (",
                product.reviews,
                " reviews)"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `text-3xl font-medium ${isDark ? "text-white" : "text-gray-900"}`,
            children: formattedPrice
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: `text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`,
            children: product.description
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isDark ? "text-gray-400" : "text-gray-600", children: "Availability:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `font-medium ${product.stock > 0 ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"}`,
              children: product.stock > 0 ? `In stock (${product.stock} available)` : "Out of stock"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            disabled: product.stock === 0,
            onClick: handleAddToCart,
            className: `
                  w-full py-4 px-6 text-base font-medium
                  transition-all duration-200 rounded-lg shadow-sm
                  ${product.stock > 0 ? isDark ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800" : "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"}
                `,
            children: product.stock > 0 ? "Add to cart" : "Sold out"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `border-t ${isDark ? "border-gray-800" : "border-gray-200"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "details",
                {
                  className: `group border-b ${isDark ? "border-gray-800" : "border-gray-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "summary",
                      {
                        className: `
                  py-4 cursor-pointer flex items-center justify-between
                  text-base font-medium
                  ${isDark ? "text-white" : "text-gray-900"}
                `,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Product Details" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "svg",
                            {
                              className: "w-5 h-5 transition-transform group-open:rotate-180",
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
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `pb-4 text-sm space-y-3 ${isDark ? "text-gray-400" : "text-gray-600"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Category:" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: isDark ? "text-gray-300" : "text-gray-900",
                                children: product.category
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SKU:" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `font-mono text-xs ${isDark ? "text-gray-300" : "text-gray-900"}`,
                                children: product.id
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Added:" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: isDark ? "text-gray-300" : "text-gray-900",
                                children: new Date(product.createdAt).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                })
                              }
                            )
                          ] })
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "details",
                {
                  className: `group border-b ${isDark ? "border-gray-800" : "border-gray-200"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "summary",
                      {
                        className: `
                  py-4 cursor-pointer flex items-center justify-between
                  text-base font-medium
                  ${isDark ? "text-white" : "text-gray-900"}
                `,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping & Returns" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "svg",
                            {
                              className: "w-5 h-5 transition-transform group-open:rotate-180",
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
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `pb-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: "Free shipping on orders over $50. Standard delivery in 5-7 business days." }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "30-day return policy. Items must be in original condition with tags attached." })
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] }) });
};

export { __federation_method_getRemote as _, useProducts as a, ProductDetail as default, useCategories as u };
