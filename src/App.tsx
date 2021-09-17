import "./App.css";
import { test } from "./firebase/functions"
import XMLsubmit from "./firebase/XMLsubmit"

export const App = () => {
  return (
    <div className="App">
      <button
        onClick = {()=>test()}
      >firestoreのテスト</button>
      <XMLsubmit/>
    </div>
  );
};