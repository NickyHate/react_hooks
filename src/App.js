import TestUseState from "./hooks/useState";
import TestUseEffect from "./hooks/useEffect";
import TestUseRef from "./hooks/useRef";
import TestUseMemo from "./hooks/useMemo";
import TestUseCallback from "./hooks/useCallback";
import TestUseContext from "./hooks/useContext";
import TestUseReducer from "./hooks/useReducer";
import TestCustomHooks from "./hooks/customHooks";
import './App.css';

function App() {
  return (
    <div className="App">
        {/*<TestUseState/>*/}
        {/*<TestUseEffect/>*/}
        {/*<TestUseRef/>*/}
        {/*<TestUseMemo/>*/}
        {/*<TestUseCallback/>*/}
        {/*<TestUseContext/>*/}
        {/*<TestUseReducer/>*/}
        <TestCustomHooks/>
    </div>
  );
}

export default App;
