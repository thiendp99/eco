import {
  lazy,
  Suspense,
  type ComponentType,
  type LazyExoticComponent,
} from 'react';
import { ErrorBoundary } from './ErrorBoundary';

type RemoteComponent = LazyExoticComponent<
  ComponentType<Record<string, unknown>>
>;

const remoteRegistry = {
  productCatalog: {
    ProductList: lazy(
      () => import('productCatalog/ProductList')
    ) as RemoteComponent,
    ProductDetail: lazy(
      () => import('productCatalog/ProductDetail')
    ) as RemoteComponent,
  },
  shoppingCart: {
    Cart: lazy(() => import('shoppingCart/Cart')) as RemoteComponent,
  },
} as const;

type RemoteModules = keyof typeof remoteRegistry;
type RemoteComponents<M extends RemoteModules> =
  keyof (typeof remoteRegistry)[M];

interface RemoteWrapperProps<M extends RemoteModules> {
  module: M;
  component: RemoteComponents<M>;
  props?: Record<string, unknown>;
}

const Loading = () => (
  <div className="py-12 text-center">
    <div className="text-sm text-gray-500">Loading...</div>
  </div>
);

const ErrorFallback = ({
  module,
  component,
}: {
  module: string;
  component: string;
}) => (
  <div
    style={{
      padding: '20px',
      textAlign: 'center',
      color: '#dc3545',
      border: '1px dashed #dc3545',
      borderRadius: '8px',
      margin: '1rem',
    }}
  >
    <h3>⚠️ Failed to load Remote</h3>
    <p>
      Could not load component: <b>{component}</b> from module: <b>{module}</b>
    </p>
    <p style={{ fontSize: '0.875rem', color: '#666' }}>
      Possible reasons:
      <br />- Remote server is down
      <br />- Component name is misspelled in Registry
      <br />- Network connectivity issues
    </p>
  </div>
);

export const RemoteWrapper = <M extends RemoteModules>({
  module,
  component,
  props = {},
}: RemoteWrapperProps<M>) => {
  const moduleRegistry = remoteRegistry[module];
  const SelectedComponent = moduleRegistry?.[
    component as keyof typeof moduleRegistry
  ] as RemoteComponent | undefined;

  if (!SelectedComponent) {
    console.error(
      `RemoteWrapper: Component '${String(component)}' not found in module '${module}'. Check remoteRegistry.`
    );
    return <ErrorFallback module={module} component={String(component)} />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <SelectedComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};
