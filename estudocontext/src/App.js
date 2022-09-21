import { DoubleCounter } from './components/doubleCounter';
import { HandleCounter } from './components/handleCounter';
import { CounterContextProvider } from './contexts/CounterContext';

function App() {

  return (
    <CounterContextProvider>
    <div>
      <HandleCounter />
      <DoubleCounter />    
    </div>
    </CounterContextProvider>
  );
}

export default App;
