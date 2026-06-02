// import Todo from "./Todo";
// import { ComponentSharing } from "./ComponentSharing";
import { SimpleCounter } from "./SimpleCounter";
import { SimpleCounterWithReducer } from "./SimpleCounterWithReducer";
import "./App.css";

function App() {
  return (
    <div id="center">
      <SimpleCounterWithReducer />
      <SimpleCounter />
      {/* <ComponentSharing /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
