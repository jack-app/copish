import React,{useState} from "react";

import "./App.css";
import { test, getXMLFile, fetchLastId } from "./firebase/functions"
import XMLsubmit from "./firebase/XMLsubmit"
import { Texteditor } from './components/texteditor'

export const App = () => {
  const [lastId,setLastId]=useState(0);
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
        onClick = {() => fetchLastId()}
      >最後のIDをとってくる</button>
    </div>
  );
};