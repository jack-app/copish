import "./App.css";
import { test, getXMLFile } from "./firebase/functions"
import XMLsubmit from "./firebase/XMLsubmit"

export const App = () => {
  return (
    <div className="App">
      <button
        onClick = {()=>test(3)}
      >firestoreのテスト</button>
      <button
        onClick = {()=>getXMLFile('test')}
      >id1を叩く</button>
      <XMLsubmit/>
    </div>
  );
};