import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';
import type { ReactNode } from 'react';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      role='alert'
      style={{
        color: 'red',
        padding: 16,
        border: '1px solid red',
        borderRadius: 4,
      }}>
      <p>Something went wrong:</p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function ErrorBoundary({
  children,
  onReset,
  fallbackComponent,
}: {
  children: ReactNode;
  onReset?: () => void;
  fallbackComponent?: (props: FallbackProps) => ReactNode;
}) {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallbackComponent ?? ErrorFallback}
      onReset={onReset}>
      {children}
    </ReactErrorBoundary>
  );
}
