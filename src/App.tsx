// import "./App.css";
//
// import logo from "./logo.svg";
//
// export const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//           hello world
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//          >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

import {Component} from 'react';

import {Upload} from './upload'


export class App extends Component {
  render() {
    return (
      <div className="App">
       <Upload/>
      </div>
    );
 }
}
