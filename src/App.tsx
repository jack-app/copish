import "./App.css";
import { test } from "./firebase/functions"

export const App = () => {
  return (
    <div className="App">
      <button
        onClick = {()=>test()}
      >Click me!</button>
    </div>
  );
};
