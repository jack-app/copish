import React,{useState} from "react";
import {Component} from 'react';

import {Upload} from './pages/upload';
import {Usage} from './pages/usage'
import "./App.css";
import { test, getXMLFile, fetchLastId } from "./firebase/functions"
import XMLsubmit from "./firebase/XMLsubmit"
import { Texteditor } from './components/texteditor'

export const App = () => {
    return (
      <div className="App">
       <Upload/>
       <Usage/>
      </div>
    );
 }

