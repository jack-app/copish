import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { saveStorage } from './functions';
import { Texteditor } from '../components/texteditor'
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-github";

function XMLsubmit() {

    const [uploadfile, setUploadfile] = useState<any|null>();
    const [xmlDoc,setXmlDoc] = useState<any|null>();
    const maxSize = 3 * 1024 * 1024;
    
    //dropzone
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setUploadfile(acceptedFiles[0]);
            saveStorage(uploadfile);
            //XMLファイルを読み込む
            var reader = new FileReader();
            reader.onload = () => {
                openXML(reader.result);
            }
            reader.readAsText(acceptedFiles[0]);
        }
    }, []);

    const openXML = (source: any) => {
        var dpObj = new DOMParser();
        var result = String(source);
        var xml = dpObj.parseFromString(result, "text/xml");
        var folder = xml.getElementsByTagName('folder');
        var snipetList = [];
        for(var i=0;i<folder.length;i++){
            snipetList.push(folder[i].getElementsByTagName('title')[0].textContent);
        }
        console.log(snipetList);
    };

    const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        onDrop,
        accept: 'text/xml',
        minSize: 1,
        maxSize,
    });

    return (
        <div>
        <div className="container m-5 text-center">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>ファイルをドラッグするかクリックしてください。</p>
                {/* {uploadfile ? <p>選択されたファイル: {uploadfile.name}</p> : null} */}
                { uploadfile && <p>選択されたファイル:{uploadfile.name} </p> }
                {isDragActive && <p>ドラッグしています</p>}
                
            </div>
        </div>
        <button
            onClick = {()=>{
                var hoge: string = '';
                function printType(x: any) {
                    console.log(`${typeof(x)} ${Object.prototype.toString.call(x)}`);
                  }
                if(uploadfile){
                    printType(uploadfile);
                }else{
                    alert('何もないよ');
                }
            }}
        >fire storageに送る！</button>
        <div>
            XMLファイルの内容: <br/>
            {xmlDoc && 
            <Texteditor
                value={xmlDoc}
            />}
        </div>
        
        </div>
    );
}

export default XMLsubmit;