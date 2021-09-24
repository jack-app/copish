import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { sendStorage } from './functions';
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
        //同名のファイルは書き換えられてしまうひょ
        //uuid使うべきかしらね
        if (acceptedFiles.length > 0) {
            setUploadfile(acceptedFiles[0]);
            acceptedFiles[0].name ? console.log(acceptedFiles[0].name) : console.log('no');
            sendStorage(uploadfile,acceptedFiles[0].name);
            console.log('file accepted¡');
            var reader = new FileReader();
            reader.onload = () => {
                var dpObj = new DOMParser();
                var result = String(reader.result);
                //console.log('result',reader.result);
                var a = dpObj.parseFromString(result, "text/xml");
                setXmlDoc(a.getElementsByTagName('content')[0]);
                console.log(result);
            }
            reader.readAsText(acceptedFiles[0]);
        
    }
    }, []);

    const openXML = (source: string) => {
        var xhr = new XMLHttpRequest();
        const [xml, setXML] = useState<any|null>();
        xhr.onload = (e) => {
           setXML(xhr.responseXML);
            if (xml != null){
              console.log(xml);
              var folder = xml.getElementByTagname('folder');
            } else {
              console.log('not xml file');
            }
        };
          xhr.open("GET", source);
          xhr.send();
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
            {xmlDoc && xmlDoc}
        </div>
        <Texteditor
        defaultValue = {xmlDoc}
      />
        </div>
    );
}

export default XMLsubmit;