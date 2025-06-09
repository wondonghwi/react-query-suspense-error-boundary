export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchTodo(id: number): Promise<Todo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}

export async function fetchTodoError(): Promise<never> {
  const res = await fetch('https://jsonplaceholder.typicode.com/404');
  if (!res.ok) throw new Error('의도적으로 실패!');
  // 실제로는 여기 도달하지 않음
  throw new Error('Unreachable');
}
