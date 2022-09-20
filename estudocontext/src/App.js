import { useState } from 'react';
import { DoubleCounter } from './doubleCounter';
import { HandleCounter } from './handleCounter';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <HandleCounter counter={counter} setCounter={setCounter} />
      <DoubleCounter counter={counter} />
    </div>
  );
}

export default App;
