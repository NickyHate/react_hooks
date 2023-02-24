import TestUseState from "./hooks/useState";
import TestUseEffect from "./hooks/useEffect";
import TestUseRef from "./hooks/useRef";
import TestUseMemo from "./hooks/useMemo";
import TestUseCallback from "./hooks/useCallback";
import './App.css';

function App() {
  return (
    <div className="App">
      <TestUseCallback/>
    </div>
  );
}

export default App;
