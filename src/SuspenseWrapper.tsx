import { Suspense, type ReactNode } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from './ErrorBoundary';
import type { FallbackProps } from 'react-error-boundary';

interface Props {
  children: ReactNode;
  suspenseFallback?: ReactNode;
  errorFallback?: (props: FallbackProps) => ReactNode;
}

const SuspenseWrapper: React.FC<Props> = ({
  children,
  suspenseFallback,
  errorFallback,
}) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackComponent={errorFallback}>
        <Suspense fallback={suspenseFallback}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export default SuspenseWrapper;
