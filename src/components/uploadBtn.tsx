import React from "react";

import { saveStorage, updateLastId, addTag, saveDatabase } from '../firebase/functions';

type Props = {
  file: File
  handleLastId: Function
  title: string
  desc: string
  tag: string
}

export const UploadBtn: React.FC<Props> = props => {
    
    return (
      <div className="UploadBtn">
        <button
         onClick={() => {
           if(!props.desc||!props.file||!props.title||!props.tag){
             alert('ファイルがアップロードされていないか，未入力の項目があります');
           }else{
             //updateLastId()の返り値がnewLastIdなんです
              const id = updateLastId().then((newLastId)=>{
                const info = {
                  id: newLastId,
                  title: props.title,
                  description: props.desc,
                  tag: props.tag.split(/\s/)
                }
              addTag(props.tag, newLastId);
              saveStorage(props.file);
              saveDatabase(newLastId, info);
            });
           }
          
        }}
        >投稿する</button>
      </div>
    );
};