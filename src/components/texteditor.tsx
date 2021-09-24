import React,{useState} from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-github";

type Props = {
    defaultValue: string|undefined
}

export const Texteditor: React.FC<Props> = props => {

    const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const [placeholder,setPlaceholder]=useState(txt);
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
        defaultValue={props.defaultValue}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
            }}
      />
      )
}
