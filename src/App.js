import "./App.css";
import Propstwo from "./container/props";
import One from "./container/propswo";
import Two from "./container/propsone";


function App() {
  return (
    <div className="App">
      <Propstwo/>
      <One name="React.js" year="2024" />
      <Two name="React.js" year="2024" />

    </div>
  );
}

export default App;
