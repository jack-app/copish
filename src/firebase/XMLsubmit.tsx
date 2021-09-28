import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { saveStorage } from './functions';
import { Texteditor } from '../components/texteditor'

export const openXML = (source: any) => {
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


type Props = {
    handleInputXmlDoc: Function,
}
export const XMLsubmit: React.FC<Props> = props => {

    const [uploadfile, setUploadfile] = useState<any|null>();
    const [xmlDoc,setXmlDoc] = useState<any|null>();
    const maxSize = 3 * 1024 * 1024;
    
    //dropzone
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setUploadfile(acceptedFiles[0]);
            props.handleInputXmlDoc(acceptedFiles[0]);
            //XMLファイルを読み込む
            var reader = new FileReader();
            reader.onload = () => {
                console.log("succesfully loaded");               
            }
            reader.readAsText(acceptedFiles[0]);
        }
    }, []);

    const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        onDrop,
        accept: 'text/xml',
        minSize: 1,
        maxSize,
    });

    return (
        <div className="container m-5 text-center">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>ファイルをドラッグするかクリックしてください。</p>
                { uploadfile && <p>選択されたファイル:{uploadfile.name} </p> }
                {isDragActive && <p>ドラッグしています</p>}
                
            </div>
        </div>
    );
}
