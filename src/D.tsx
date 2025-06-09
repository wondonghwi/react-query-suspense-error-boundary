import { useQuery } from '@tanstack/react-query';
import { fetchTodoError } from './api';

const D: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todo', 'error', 'd'],
    queryFn: fetchTodoError,
  });

  if (isLoading) {
    return (
      <div style={{ minHeight: 120, display: 'flex', alignItems: 'center' }}>
        로딩중 ...
      </div>
    );
  }
  if (error) {
    // ErrorBoundary가 감싸고 있으면 여기까지 안 옴, fallbackRender에서 처리됨
    return null;
  }
  return (
    <div style={{ minHeight: 120 }}>
      <h2>D 컴포넌트 (useQuery, 에러 발생 예제)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default D;
