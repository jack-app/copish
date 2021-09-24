import "./App.css";
import { test, getXMLFile, getLastId } from "./firebase/functions"
import XMLsubmit from "./firebase/XMLsubmit"
import { Texteditor } from './components/texteditor'
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
      <button
        onClick = {() => getLastId()}
      >最後のIDをとってくる</button>
    </div>
  );
};