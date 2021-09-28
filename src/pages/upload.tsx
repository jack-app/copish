import {Component, useState, useRef} from 'react';

import {XMLsubmit, openXML} from '../firebase/XMLsubmit';
import { saveStorage } from '../firebase/functions';
import { UploadBtn } from '../components/uploadBtn';

export const Upload = () => {
  const [xmlDoc,setXmlDoc]=useState<any|null>();
  const [lastId, setLastId]=useState<string>();
  const titleRef = useRef(null);
  //const tagRef = useRef(null);
  const descRef = useRef(null);

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
        <input ref={titleRef} type="text" /><br/>

        <b>タグ</b><br/>
        <input/><br/>

        <b>説明</b><br/>
        <textarea value={titleRef} type="text" /><br/>

        <UploadBtn
         file = {xmlDoc}
         handleLastId={handleLastId}
        />
        <b>注釈</b>
        <p>投稿後、削除を依頼する場合下記のメールアドレスに連絡ください</p>
        <br/>
      </div>

    );  
}
    
 