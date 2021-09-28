import React from "react";

import { saveStorage, fetchLastId } from '../firebase/functions';

type Props = {
  file: File
  handleLastId: Function
}

export const UploadBtn: React.FC<Props> = props => {
    
    return (
      <div className="UploadBtn">
        <button
         onClick={() => {
          saveStorage(props.file)
        }}
        >投稿する</button>
      </div>
    );
};