import {Component, useState, useRef} from 'react';

import {XMLsubmit, openXML} from '../firebase/XMLsubmit';
import { saveStorage } from '../firebase/functions';
import { UploadBtn } from '../components/uploadBtn';

export const Upload = () => {
  const [xmlDoc,setXmlDoc]=useState<any|null>();
  const [lastId, setLastId]=useState<string>();
  const [title, setTitle]=useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const handleInputXmlDoc = (file: any) => {
    setXmlDoc(file);
  }
  const handleLastId = (id: string) => {
    setLastId(id);
  }
return (
      <div className="App">
        <h1>投稿する</h1>
        <b>投稿フォルダ</b>
        <p>clipyでエクスポートされたフォルダのみ投稿できます。</p>
        <XMLsubmit
          handleInputXmlDoc={handleInputXmlDoc}
        /><br/>

        <b>タイトル</b><br/>
        <input type="text" onChange={(e) => {setTitle(e.target.value)}} /><br/>

        <b>タグ</b><br/>
        <input type="text" onChange={(e) => {setTag(e.target.value)}}/><br/>

        <b>説明</b><br/>
        <textarea onChange={(e) => {setDesc(e.target.value)}} /><br/>

        <UploadBtn
         file = {xmlDoc}
         handleLastId={handleLastId}
         title = {title}
         desc = {desc}
         tag = {tag}
        />
        <b>注釈</b>
        <p>投稿後、削除を依頼する場合下記のメールアドレスに連絡ください</p>
        <br/>
      </div>

    );  
}
    
 