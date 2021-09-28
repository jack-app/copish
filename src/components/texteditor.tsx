import React,{useState} from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-github";

type Props = {
    value: string|undefined
}

export const Texteditor: React.FC<Props> = props => {
    const [placeholder,setPlaceholder]=useState();
    function onChange(newValue: any) {
        console.log("change", newValue);
    }
    
    return(
        <AceEditor
        mode="xml"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        defaultValue={props.value}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
            }}
      />
      )
}
