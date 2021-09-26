import React,{useState} from "react";
import {Component} from 'react';

import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';

import {Upload} from './pages/upload';
import {Usage} from './pages/usage';
import {Home} from './pages/home';
import {Search} from './pages/search';
import "./App.css";

export const App = () => {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/usage" exact>
              <Usage />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Route path="/upload" exact>
              <Upload />
            </Route>
          </Switch>
        </Router>
      </div>
      
    );
 }
// import { test, getXMLFile, fetchLastId } from "./firebase/functions"
// import XMLsubmit from "./firebase/XMLsubmit"
// import { Texteditor } from './components/texteditor'

