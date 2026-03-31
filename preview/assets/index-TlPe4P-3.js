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

const TEST_ACCOUNTS = [
  {
    role: "Admin",
    email: "admin@test.com",
    password: "admin123"
  },
  {
    role: "User",
    email: "user@test.com",
    password: "user123"
  }
];

const {create} = await importShared('zustand');
const mockLogin = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  const adminAccount = TEST_ACCOUNTS.find((a) => a.role === "Admin");
  if (email === adminAccount?.email && password === adminAccount?.password) {
    return {
      id: "1",
      name: "Admin User",
      email: adminAccount.email,
      role: "admin"
    };
  }
  const userAccount = TEST_ACCOUNTS.find((a) => a.role === "User");
  if (email === userAccount?.email && password === userAccount?.password) {
    return {
      id: "2",
      name: "Regular User",
      email: userAccount.email,
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
      name: "auth-storage",
      // Gracefully skip persistence if localStorage is unavailable
      // (e.g., private browsing mode or storage quota exceeded)
      storage: {
        getItem: (name) => {
          try {
            const value = localStorage.getItem(name);
            return value ? JSON.parse(value) : null;
          } catch {
            return null;
          }
        },
        setItem: (name, value) => {
          try {
            localStorage.setItem(name, JSON.stringify(value));
          } catch {
          }
        },
        removeItem: (name) => {
          try {
            localStorage.removeItem(name);
          } catch {
          }
        }
      }
    }
  )
);

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


const __iconNode$c = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$c);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$b = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$b);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$a = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$a);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$9 = [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
];
const Box = createLucideIcon("box", __iconNode$9);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$8 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$8);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$7);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$6);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$5);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
];
const PanelsTopLeft = createLucideIcon("panels-top-left", __iconNode$4);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$3);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$2);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode$1);

/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);

const {useState} = await importShared('react');

const {Navigate: Navigate$1,useNavigate: useNavigate$1,useLocation: useLocation$1,Link: Link$4} = await importShared('react-router-dom');
const {useThemeStore: useThemeStore$3} = await importShared('@ecommerce/shared');
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate$1();
  const location = useLocation$1();
  const { theme } = useThemeStore$3();
  const isDark = theme === "dark";
  const from = location.state?.from?.pathname ?? "/products";
  if (isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate$1, { to: from, replace: true });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `min-h-screen flex flex-col lg:flex-row transition-colors duration-300 ${isDark ? "bg-slate-950" : "bg-gray-50"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-center p-8 sm:p-12 lg:p-24 relative overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 left-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link$4,
          {
            to: "/",
            className: `flex items-center gap-2 text-sm font-medium transition-colors hover:-translate-x-1 ${isDark ? "text-slate-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Back to Home"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center lg:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: `text-4xl font-extrabold tracking-tight mb-3 ${isDark ? "text-white" : "text-gray-900"}`,
                children: "Welcome Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-lg flex flex-col items-center lg:items-start ${isDark ? "text-slate-400" : "text-gray-500"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Please sign in to your account" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-6 animate-fade-up delay-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                if (TEST_ACCOUNTS.length > 0) {
                  setEmail(TEST_ACCOUNTS[0].email);
                  setPassword(TEST_ACCOUNTS[0].password);
                }
              },
              className: `text-sm font-semibold transition-colors hover:underline flex items-center gap-1.5 ${isDark ? "text-indigo-400 hover:text-indigo-300" : "text-indigo-600 hover:text-indigo-700"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4" }),
                "Auto-fill Demo Admin"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "space-y-6 animate-fade-up delay-200",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      className: `block text-sm font-semibold mb-2 ${isDark ? "text-slate-300" : "text-gray-700"}`,
                      children: "Email Address"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Mail,
                      {
                        className: `h-5 w-5 ${isDark ? "text-slate-500" : "text-gray-400"}`
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "email",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        required: true,
                        autoComplete: "email",
                        placeholder: "Enter your email",
                        className: `w-full rounded-xl pl-11 pr-4 py-3.5 text-sm transition-all outline-none focus:ring-2 ${isDark ? "bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20" : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"}`
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      className: `block text-sm font-semibold mb-2 ${isDark ? "text-slate-300" : "text-gray-700"}`,
                      children: "Password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Lock,
                      {
                        className: `h-5 w-5 ${isDark ? "text-slate-500" : "text-gray-400"}`
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "password",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        required: true,
                        autoComplete: "current-password",
                        placeholder: "Enter your password",
                        className: `w-full rounded-xl pl-11 pr-4 py-3.5 text-sm transition-all outline-none focus:ring-2 ${isDark ? "bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20" : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20"}`
                      }
                    )
                  ] })
                ] }),
                error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `rounded-xl px-4 py-3 text-sm flex items-center gap-2 animate-fade-in ${isDark ? "bg-red-500/10 border border-red-500/20 text-red-400" : "bg-red-50 border border-red-200 text-red-600"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-current" }),
                      error
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    disabled: loading,
                    className: `
                group relative w-full flex justify-center items-center gap-2 rounded-xl py-4 text-sm font-bold text-white
                transition-all duration-300 overflow-hidden outline-none mt-4
                ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:-translate-y-0.5"}
              `,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: loading ? "Authenticating..." : "Sign In Securely" }),
                      !loading && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ] })
    }
  );
};

const {Link: Link$3} = await importShared('react-router-dom');
const {useThemeStore: useThemeStore$2} = await importShared('@ecommerce/shared');
const features = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "w-6 h-6" }),
    title: "Micro Frontend Architecture",
    description: "Built with Module Federation for scalable, independent deployments"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6" }),
    title: "Blazing Fast",
    description: "Powered by Vite for lightning-fast development and builds"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-6 h-6" }),
    title: "State Management",
    description: "React Query for server state, Zustand for client state"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6" }),
    title: "Testing Ready",
    description: "Vitest for unit tests, Playwright for E2E testing"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-6 h-6" }),
    title: "Theme Support",
    description: "Dark and light themes with persistent preferences"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "w-6 h-6" }),
    title: "Modular Design",
    description: "Independent micro frontends for product catalog and shopping cart"
  }
];
const HomePage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { theme } = useThemeStore$2();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-20 pb-32 flex flex-col items-center text-center animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors hover:bg-indigo-500/20 border-indigo-500/30 bg-indigo-500/10 text-indigo-500 font-medium text-sm mb-8 animate-fade-up delay-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-indigo-500" })
        ] }),
        "Next-Gen Microfrontend"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h1",
        {
          className: `text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-fade-up delay-200 ${isDark ? "text-white" : "text-slate-900"}`,
          children: [
            "Welcome to the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 pb-2 inline-block", children: "E-Commerce Platform" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: `text-lg md:text-xl max-w-2xl mb-12 animate-fade-up delay-300 ${isDark ? "text-slate-400" : "text-slate-600"}`,
          children: "A modern retail experience built with React, Vite, and Module Federation. Discover seamless shopping across decentralized micro-applications."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-400", children: [
        !isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link$3,
          {
            to: "/login",
            className: "group relative px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 w-full sm:w-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Sign In to Shop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link$3,
          {
            to: "/products",
            className: "group relative px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 w-full sm:w-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Browse Products" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/thiendp99",
            target: "_blank",
            rel: "noopener noreferrer",
            className: `px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto ${isDark ? "border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800" : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }),
              "View My Profile"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up delay-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: `text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`,
            children: "Enterprise-Grade Architecture"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: isDark ? "text-slate-400" : "text-slate-600", children: "Engineered for performance, scalability, and developer experience" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 animate-fade-up ${isDark ? "bg-slate-900 border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgba(79,70,229,0.15)]" : "bg-white border-slate-200 hover:border-indigo-500/30 hover:shadow-[0_8px_30px_rgba(79,70,229,0.1)]"}`,
          style: { animationDelay: `${500 + index * 100}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${isDark ? "bg-slate-800 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300" : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"}`,
                children: feature.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`,
                children: feature.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`,
                children: feature.description
              }
            )
          ]
        },
        feature.title
      )) })
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

const {Outlet,Link: Link$2,useNavigate} = await importShared('react-router-dom');
const {useThemeStore: useThemeStore$1} = await importShared('@ecommerce/shared');

const {Suspense: Suspense$1,lazy: lazy$1} = await importShared('react');
const CartButton = lazy$1(() => __federation_method_getRemote("shoppingCart" , "./CartButton").then(module=>__federation_method_wrapDefault(module, true)));
const CartDrawer = lazy$1(() => __federation_method_getRemote("shoppingCart" , "./CartDrawer").then(module=>__federation_method_wrapDefault(module, true)));
const MainLayout = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore$1();
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link$2, { to: "/", className: "flex items-center gap-2.5 group", children: [
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
                    Link$2,
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
                    Link$2,
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
                  isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Suspense$1,
                    {
                      fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-full" }),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartButton, {})
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: toggleTheme,
                      "aria-label": "Toggle theme",
                      className: `
                  p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-sm ring-1
                  ${isDark ? "text-yellow-400 bg-slate-800 ring-slate-700 hover:bg-slate-700 hover:text-yellow-300" : "text-indigo-600 bg-white ring-gray-200 hover:bg-indigo-50 hover:text-indigo-700"}
                `,
                      children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5" })
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
                  Link$2,
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
        isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense$1, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {}) }) })
      ]
    }
  );
};

const {Link: Link$1} = await importShared('react-router-dom');

const NotFoundPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "3rem" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: { fontSize: "4rem", margin: 0 }, children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: "1.5rem", marginBottom: "2rem" }, children: "Page Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link$1,
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

const {Link} = await importShared('react-router-dom');
const {useThemeStore} = await importShared('@ecommerce/shared');

const DashboardPage = () => {
  const { user } = useAuthStore();
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `rounded-2xl border p-8 mb-6 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: `text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`,
              children: "Dashboard"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: `text-sm mb-6 ${isDark ? "text-gray-400" : "text-gray-500"}`,
              children: [
                "Welcome back,",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: user?.name ?? "Admin" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `rounded-xl border p-6 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`,
                  children: "🚧 Admin dashboard — coming soon."
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/products",
        className: `inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`,
        children: "← Back to Products"
      }
    )
  ] });
};

const {Navigate,useLocation} = await importShared('react-router-dom');
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true, state: { from: location } });
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
    Cart: lazy(() => __federation_method_getRemote("shoppingCart" , "./Cart").then(module=>__federation_method_wrapDefault(module, true)))
  }
};
const Loading = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: "Loading..." }) });
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
  const moduleRegistry = remoteRegistry[module];
  const SelectedComponent = moduleRegistry?.[component];
  if (!SelectedComponent) {
    console.error(
      `RemoteWrapper: Component '${String(component)}' not found in module '${module}'. Check remoteRegistry.`
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorFallback, { module, component: String(component) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectedComponent, { ...props }) }) });
};

const {createBrowserRouter} = await importShared('react-router-dom');
const router = createBrowserRouter(
  [
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
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            RemoteWrapper,
            {
              module: "productCatalog",
              component: "ProductDetail"
            }
          ) })
        },
        {
          path: "cart",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RemoteWrapper, { module: "shoppingCart", component: "Cart" }) })
        },
        {
          path: "dashboard",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPage, {}) })
        },
        {
          path: "*",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFoundPage, {})
        }
      ]
    }
  ],
  {
    basename: "/eco/"
  }
);

const {RouterProvider} = await importShared('react-router-dom');

const {QueryClientProvider} = await importShared('@tanstack/react-query');
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router }) });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
