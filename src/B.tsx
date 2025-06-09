import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchTodo, type Todo } from './api';

const B: React.FC = () => {
  const { data } = useSuspenseQuery<Todo, Error>({
    queryKey: ['todo', 2],
    queryFn: () => fetchTodo(2),
  });

  return (
    <div>
      <h2>B 컴포넌트</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default B;
