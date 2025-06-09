import { ErrorBoundary } from './ErrorBoundary';
import A from './A';
import B from './B';
import C from './C';
import SuspenseWrapper from './SuspenseWrapper';
import './App.css';

const loadingFallback = (
  <div style={{ minHeight: 120, display: 'flex', alignItems: 'center' }}>
    로딩중 ...
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <h1>react-query + suspense + error-boundary 예제</h1>
      {/* <div style={{ display: 'flex', gap: 24 }}>
        <ErrorBoundary>
          <Foo />
        </ErrorBoundary>
        <ErrorBoundary>
          <Bar />
        </ErrorBoundary>
      </div>
      <hr />
      <BuggyComponent /> */}
      <hr />
      <SuspenseWrapper suspenseFallback={loadingFallback}>
        <A />
      </SuspenseWrapper>
      <hr />
      <SuspenseWrapper suspenseFallback={loadingFallback}>
        <B />
      </SuspenseWrapper>
      <hr />
      <SuspenseWrapper suspenseFallback={loadingFallback}>
        <C />
      </SuspenseWrapper>
      <hr />
    </ErrorBoundary>
  );
}

export default App;
