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


export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>投稿する</h1>
        <b>投稿フォルダ</b>
        <p>clipyでエクスポートされたフォルダのみ投稿できます。</p>
        <button>フォルダを選択</button>

        <b>注釈</b>
        <p>投稿後、削除を依頼する場合下記のメールアドレスに連絡ください</p>
      </div>
    );
 }
}
