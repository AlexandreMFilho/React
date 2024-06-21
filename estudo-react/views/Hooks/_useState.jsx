import { useState } from 'react';

function _useState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Adiciona</button>
      <button onClick={() => setCount(count - 1)}>Subtrai</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
} export default _useState;