import { lazy, Suspense, ComponentType } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

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

const ErrorFallback = ({ module }: { module: string }) => (
  <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
    <h3>Failed to load {module}</h3>
    <p>Please make sure the remote application is running</p>
  </div>
);

export const RemoteWrapper = ({ module, component, props = {} }: RemoteWrapperProps) => {
  const Component = lazy<ComponentType<any>>(() =>
    import(/* @vite-ignore */ `${module}/${component}`).catch((error) => {
      console.error(`Failed to load remote ${module}/${component}:`, error);
      return {
        default: () => <ErrorFallback module={module} />,
      };
    })
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};