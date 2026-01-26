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

const remoteRegistry: Record<string, Record<string, RemoteComponent>> = {
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
    CartButton: lazy(
      () => import('shoppingCart/CartButton')
    ) as RemoteComponent,
  },
};

interface RemoteWrapperProps {
  module: string;
  component: string;
  props?: Record<string, unknown>;
}

const Loading = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <div>Loading...</div>
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

export const RemoteWrapper = ({
  module,
  component,
  props = {},
}: RemoteWrapperProps) => {
  // 2. Retrieve Component from Registry based on props string
  const SelectedComponent = remoteRegistry[module]?.[component];

  // 3. Handle case where component is not found in Registry (Incorrect code)
  if (!SelectedComponent) {
    console.error(
      `RemoteWrapper: Component '${component}' not found in module '${module}'. Check remoteRegistry.`
    );
    return <ErrorFallback module={module} component={component} />;
  }

  // 4. Render safely with ErrorBoundary and Suspense
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <SelectedComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};
