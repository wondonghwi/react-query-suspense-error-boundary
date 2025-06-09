import { useState } from 'react';

const Foo: React.FC = () => {
  const [count, setCount] = useState(0);
  if (count === 3) throw new Error('Foo에서 에러 발생!');
  return (
    <div>
      <h2>Foo</h2>
      <p>카운트: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>증가</button>
    </div>
  );
};

export default Foo;
