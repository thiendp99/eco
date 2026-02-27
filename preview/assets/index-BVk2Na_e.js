import { i as importShared } from './_virtual___federation_fn_import-CyrdDHW1.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { r as reactDomExports } from './index-COvqqES_.js';
import { p as persist } from './middleware-DqsRACVM.js';

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

const {QueryClient} = await importShared('@tanstack/react-query');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Caching strategy
      staleTime: 5 * 60 * 1e3,
      // 5 minutes
      gcTime: 10 * 60 * 1e3,
      // 10 minutes (formerly `cacheTime`)
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 1
    }
  }
});

const {create} = await importShared('zustand');
const mockLogin = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  if (email === "admin@test.com" && password === "admin123") {
    return {
      id: "1",
      name: "Admin User",
      email: "admin@test.com",
      role: "admin"
    };
  }
  if (email === "user@test.com" && password === "user123") {
    return {
      id: "2",
      name: "Regular User",
      email: "user@test.com",
      role: "user"
    };
  }
  throw new Error("Invalid credentials");
};
const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        const user = await mockLogin(email, password);
        set({ user, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      setUser: (user) => {
        set({ user, isAuthenticated: true });
      }
    }),
    {
      name: "auth-storage"
      // LocalStorage key
    }
  )
);

const {useState} = await importShared('react');

const {useNavigate: useNavigate$1} = await importShared('react-router-dom');
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate$1();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-200 rounded-2xl shadow-sm p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-900 mb-2", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Welcome back, please login to your account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-gray-900 mb-1", children: "Test Accounts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600", children: [
        "Admin: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "admin@test.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600", children: [
        "User: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "user@test.com" }),
        " /",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "user123" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            className: "\n              w-full rounded-lg border border-gray-300\n              px-4 py-2.5 text-sm\n              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900\n            "
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
            className: "\n              w-full rounded-lg border border-gray-300\n              px-4 py-2.5 text-sm\n              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900\n            "
          }
        )
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: `
            w-full rounded-lg py-3 text-sm font-medium
            transition-all duration-200
            ${loading ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-800"}
          `,
          children: loading ? "Signing in..." : "Sign in"
        }
      )
    ] })
  ] }) }) });
};

const {Link: Link$2} = await importShared('react-router-dom');
const {useThemeStore: useThemeStore$1} = await importShared('@ecommerce/shared');

const HomePage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { theme } = useThemeStore$1();
  const isDark = theme === "dark";
  const features = [
    {
      icon: "🏗️",
      title: "Micro Frontend Architecture",
      description: "Built with Module Federation for scalable, independent deployments"
    },
    {
      icon: "⚡",
      title: "Blazing Fast",
      description: "Powered by Vite for lightning-fast development and builds"
    },
    {
      icon: "🔄",
      title: "State Management",
      description: "React Query for server state, Zustand for client state"
    },
    {
      icon: "🧪",
      title: "Testing Ready",
      description: "Vitest for unit tests, Playwright for E2E testing"
    },
    {
      icon: "🌓",
      title: "Theme Support",
      description: "Dark and light themes with persistent preferences"
    },
    {
      icon: "📦",
      title: "Modular Design",
      description: "Independent micro frontends for product catalog and shopping cart"
    }
  ];
  const buttonStyle = {
    display: "inline-block",
    padding: "0.875rem 2rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          textAlign: "center",
          padding: "4rem 2rem",
          marginBottom: "4rem",
          background: isDark ? "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "16px",
          color: isDark ? "#ffffff" : "#ffffff",
          boxShadow: isDark ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "0 4px 20px rgba(102, 126, 234, 0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              style: {
                fontSize: "2.5rem",
                marginBottom: "1rem",
                fontWeight: 700,
                lineHeight: 1.2
              },
              children: "Welcome to E-Commerce Platform"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontSize: "1.25rem",
                marginBottom: "2rem",
                opacity: 0.95,
                maxWidth: "600px",
                margin: "0 auto 2rem"
              },
              children: "A modern micro frontend application built with React, Vite, and Module Federation"
            }
          ),
          !isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                  opacity: 0.9
                },
                children: "Please login to start shopping"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link$2,
              {
                to: "/login",
                style: {
                  ...buttonStyle,
                  backgroundColor: "#ffffff",
                  color: "#667eea"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 255, 255, 0.3)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                },
                children: "Go to Login"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                  opacity: 0.9
                },
                children: "Start exploring our products!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link$2,
              {
                to: "/products",
                style: {
                  ...buttonStyle,
                  backgroundColor: "#28a745",
                  color: "#ffffff"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(40, 167, 69, 0.4)";
                  e.currentTarget.style.backgroundColor = "#218838";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.backgroundColor = "#28a745";
                },
                children: "Browse Products"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          style: {
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "3rem",
            fontWeight: 600,
            color: isDark ? "#ffffff" : "#333"
          },
          children: "Platform Features"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem"
          },
          children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                padding: "2rem",
                backgroundColor: isDark ? "#2d2d2d" : "#ffffff",
                borderRadius: "12px",
                border: `1px solid ${isDark ? "#404040" : "#e0e0e0"}`,
                transition: "all 0.3s ease",
                boxShadow: isDark ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "0 2px 8px rgba(0, 0, 0, 0.05)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = isDark ? "0 8px 24px rgba(0, 0, 0, 0.3)" : "0 8px 24px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = isDark ? "#555" : "#007bff";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = isDark ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "0 2px 8px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.borderColor = isDark ? "#404040" : "#e0e0e0";
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      fontSize: "3rem",
                      marginBottom: "1rem",
                      textAlign: "center"
                    },
                    children: feature.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    style: {
                      fontSize: "1.25rem",
                      marginBottom: "0.75rem",
                      fontWeight: 600,
                      color: isDark ? "#ffffff" : "#333",
                      textAlign: "center"
                    },
                    children: feature.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      fontSize: "0.95rem",
                      color: isDark ? "#b0b0b0" : "#666",
                      lineHeight: 1.6,
                      textAlign: "center",
                      margin: 0
                    },
                    children: feature.description
                  }
                )
              ]
            },
            index
          ))
        }
      )
    ] })
  ] });
};

const remotesMap = {
'productCatalog':{url:'./remotes/product-catalog/remoteEntry.js',format:'esm',from:'vite'},
  'shoppingCart':{url:'./remotes/shopping-cart/remoteEntry.js',format:'esm',from:'vite'}
};
                const currentImports = {};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
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
                    'react':{'18.3.1':{get:()=>get(new URL('__federation_shared_react-BCcI129A.js', import.meta.url).href, remoteFrom), loaded:1}},'react-dom':{'18.3.1':{get:()=>get(new URL('__federation_shared_react-dom-BN8Au471.js', import.meta.url).href, remoteFrom), loaded:1}},'react-router-dom':{'6.30.3':{get:()=>get(new URL('__federation_shared_react-router-dom-DWMg6_tN.js', import.meta.url).href, remoteFrom), loaded:1}},'zustand':{'4.5.7':{get:()=>get(new URL('__federation_shared_zustand-CBALVyVZ.js', import.meta.url).href, remoteFrom), loaded:1}},'@tanstack/react-query':{'5.90.20':{get:()=>get(new URL('__federation_shared_@tanstack/react-query-BU7d7bxL.js', import.meta.url).href, remoteFrom), loaded:1}},'@ecommerce/shared':{'1.0.0':{get:()=>get(new URL('__federation_shared_@ecommerce/shared-DYlCYPni.js', import.meta.url).href, remoteFrom), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
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

                function __federation_method_wrapDefault(module, need) {
                    if (!module?.default && need) {
                        let obj = Object.create(null);
                        obj.default = module;
                        obj.__esModule = true;
                        return obj;
                    }
                    return module;
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const {Component} = await importShared('react');

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: this.props.fallback || /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "20px", textAlign: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Something went wrong" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: this.state.error?.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => this.setState({ hasError: false, error: null }),
            children: "Try again"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}

const {Outlet,Link: Link$1,useNavigate} = await importShared('react-router-dom');
const {useThemeStore} = await importShared('@ecommerce/shared');

const {Suspense: Suspense$1,lazy: lazy$1} = await importShared('react');
const CartButton = lazy$1(() => __federation_method_getRemote("shoppingCart" , "./CartButton").then(module=>__federation_method_wrapDefault(module, true)));
const CartDrawer = lazy$1(() => __federation_method_getRemote("shoppingCart" , "./CartDrawer").then(module=>__federation_method_wrapDefault(module, true)));
const MainLayout = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `
        min-h-screen flex flex-col transition-colors duration-300
        ${isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"}
      `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "header",
          {
            className: `
    sticky top-0 z-40
    border-b transition-colors duration-300 backdrop-blur-md
    ${isDark ? "bg-gray-950/80 border-gray-800" : "bg-white/80 border-gray-200"}
  `,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$1, { to: "/", className: "flex items-center gap-2.5 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `
          w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-105
          ${isDark ? "bg-white text-gray-900" : "bg-gray-900 text-white"}
        `,
                      children: "E"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-lg font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`,
                      children: "Commerce"
                    }
                  )
                ] }),
                isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link$1,
                    {
                      to: "/products",
                      className: `
              text-sm font-medium transition-colors duration-200
              ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}
            `,
                      children: "Products"
                    }
                  ),
                  user?.role === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link$1,
                    {
                      to: "/dashboard",
                      className: `
                text-sm font-medium transition-colors duration-200
                ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}
              `,
                      children: "Dashboard"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 sm:gap-2", children: [
                  isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Suspense$1,
                    {
                      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-full" }),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartButton, {}) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: toggleTheme,
                      "aria-label": "Toggle theme",
                      className: `
            p-2 rounded-full transition-colors duration-200
            ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}
          `,
                      children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                              d: "M20.354 15.354A9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            }
                          )
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                            }
                          )
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `hidden sm:block w-px h-5 ${isDark ? "bg-gray-800" : "bg-gray-200"}`
                  }
                ),
                isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 pl-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `hidden sm:block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`,
                      children: user?.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: handleLogout,
                      className: `
              text-sm font-medium transition-colors duration-200
              ${isDark ? "text-gray-500 hover:text-gray-300" : "text-gray-500 hover:text-gray-900"}
            `,
                      children: "Log out"
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link$1,
                  {
                    to: "/login",
                    className: `
            px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${isDark ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-800"}
          `,
                    children: "Sign in"
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Suspense$1,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `
                    text-center py-20 text-sm
                    ${isDark ? "text-gray-400" : "text-gray-600"}
                  `,
                children: "Loading page..."
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
          }
        ) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "footer",
          {
            className: `
    border-t transition-colors duration-300
    ${isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}
  `,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `
          text-sm tracking-wide
          ${isDark ? "text-gray-400" : "text-gray-600"}
        `,
                  children: [
                    "© ",
                    (/* @__PURE__ */ new Date()).getFullYear(),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `
            font-medium
            ${isDark ? "text-gray-200" : "text-gray-900"}
          `,
                        children: "E-Commerce"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline", children: [
                      " ",
                      "· Micro Frontend Platform"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `
          text-xs
          ${isDark ? "text-gray-500" : "text-gray-400"}
        `,
                  children: "Built with React & TailwindCSS"
                }
              )
            ] }) })
          }
        ),
        isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense$1, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}) }) })
      ]
    }
  );
};

const {Link} = await importShared('react-router-dom');

const NotFoundPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "3rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "4rem", margin: 0 }, children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "1.5rem", marginBottom: "2rem" }, children: "Page Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        style: {
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px"
        },
        children: "Go Home"
      }
    )
  ] });
};

const {lazy,Suspense} = await importShared('react');
const remoteRegistry = {
  productCatalog: {
    ProductList: lazy(
      () => __federation_method_getRemote("productCatalog" , "./ProductList").then(module=>__federation_method_wrapDefault(module, true))
    ),
    ProductDetail: lazy(
      () => __federation_method_getRemote("productCatalog" , "./ProductDetail").then(module=>__federation_method_wrapDefault(module, true))
    )
  },
  shoppingCart: {
    Cart: lazy(() => __federation_method_getRemote("shoppingCart" , "./Cart").then(module=>__federation_method_wrapDefault(module, true))),
    CartButton: lazy(
      () => __federation_method_getRemote("shoppingCart" , "./CartButton").then(module=>__federation_method_wrapDefault(module, true))
    ),
    CartDrawer: lazy(
      () => __federation_method_getRemote("shoppingCart" , "./CartDrawer").then(module=>__federation_method_wrapDefault(module, true))
    )
  }
};
const Loading = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px", textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." }) });
const ErrorFallback = ({
  module,
  component
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    style: {
      padding: "20px",
      textAlign: "center",
      color: "#dc3545",
      border: "1px dashed #dc3545",
      borderRadius: "8px",
      margin: "1rem"
    },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "⚠️ Failed to load Remote" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Could not load component: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: component }),
        " from module: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: module })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: "0.875rem", color: "#666" }, children: [
        "Possible reasons:",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "- Remote server is down",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "- Component name is misspelled in Registry",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "- Network connectivity issues"
      ] })
    ]
  }
);
const RemoteWrapper = ({
  module,
  component,
  props = {}
}) => {
  const SelectedComponent = remoteRegistry[module]?.[component];
  if (!SelectedComponent) {
    console.error(
      `RemoteWrapper: Component '${component}' not found in module '${module}'. Check remoteRegistry.`
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorFallback, { module, component });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectedComponent, { ...props }) }) });
};

const {createBrowserRouter,Navigate} = await importShared('react-router-dom');
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login" });
};
const router = createBrowserRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxRuntimeExports.jsx(MainLayout, {}),
    children: [
      {
        index: true,
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {})
      },
      {
        path: "login",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginPage, {})
      },
      {
        path: "products",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteWrapper, { module: "productCatalog", component: "ProductList" }) })
      },
      {
        path: "products/:id",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteWrapper, { module: "productCatalog", component: "ProductDetail" }) })
      },
      {
        path: "cart",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteWrapper, { module: "shoppingCart", component: "Cart" }) })
      },
      {
        path: "*",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
      }
    ]
  }
]);

const {RouterProvider} = await importShared('react-router-dom');

const {QueryClientProvider} = await importShared('@tanstack/react-query');
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router }) });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
