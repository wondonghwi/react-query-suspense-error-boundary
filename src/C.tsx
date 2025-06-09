import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchTodoError } from './api';

const C: React.FC = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['todo', 'error'],
    queryFn: fetchTodoError,
  });
  return (
    <div>
      <h2>C 컴포넌트 (에러 발생 예제)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default C;
