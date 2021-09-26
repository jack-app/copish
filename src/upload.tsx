import {Component} from 'react';


export class Upload extends Component {
  render() {
    return (
      <div className="App">
        <h1>投稿する</h1>
        <b>投稿フォルダ</b>
        <p>clipyでエクスポートされたフォルダのみ投稿できます。</p>
        <button>フォルダを選択</button><br/>
        <b>タイトル</b><br/>
        <input></input><br/>
        <b>タグ</b><br/>
        <input></input><br/>
        <b>説明</b><br/>
        <input></input><br/>

        <b>注釈</b>
        <p>投稿後、削除を依頼する場合下記のメールアドレスに連絡ください</p>
        <button>投稿する</button><br/>
      </div>

    );
 }
}
