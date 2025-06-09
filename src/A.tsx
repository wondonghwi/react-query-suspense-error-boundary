import { useQuery } from '@tanstack/react-query';
import { fetchTodo, type Todo } from './api';

const A: React.FC = () => {
  const { data, isLoading, error } = useQuery<Todo, Error>({
    queryKey: ['todo', 1],
    queryFn: () => fetchTodo(1),
  });

  if (isLoading) return <div>Loading A...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <h2>A 컴포넌트</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default A;
