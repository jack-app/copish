import React,{useState} from "react";
import { getFirestore, setDoc, collection, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL}  from "firebase/storage";


import { app } from "./config/config"

const storage = getStorage(app);
const db = getFirestore(app);

// Create a storage reference from our storage service
// const xmlRef = ref(storage, 'xmlfiles');

const testObj = {
  id: 1,
  title: "TeXのテンプレ",
  description:"TeXのレポートのテンプレです．大学生の皆さんに使ってもらいたいです．",
  tag:{
    1: "TeX",
    2: "大学生"
  },
  created_at: new Date(),  
}
export const test = async (xmlid: number) => {
  try {
    await setDoc(doc(db, "data",`${xmlid}`), testObj);
    console.log("Document written with ID: ", xmlid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  try {
    await setDoc(doc(db, "id",`lastid`),{id: xmlid});
    console.log("ID registered: ", xmlid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const saveStorage = (file: File) => {
  var lastId = fetchLastId();
  console.log(lastId);
  const xmlRef = ref(storage, `xmlfiles/${lastId}.xml`);

  // 'file' comes from the Blob or File API
  uploadBytes(xmlRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}
// id.xmlのXMLファイルをダウンロードするためのURLを取得する
export const getXMLFile = (id:string) => {
  getDownloadURL(ref(storage, `xmlfiles/${id}.xml`))
  .then((url) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
      const xml = xhr.responseXML;
      if (xml != null){
        console.log('yes')
        console.log(xml);
      } else {
        console.log('not xml file');
      };
      xhr.open("GET", url);
      xhr.send();
    }
  })
  .catch((error) => {
    // Handle any errors
    console.log(error);
  });

}

//id番号をとってくる
export const fetchLastId = async () => {
  const docRef = doc(db, "id", "lastid");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log(docSnap.data().id)
    return Number(docSnap.data().id);
  } else {
    // doc.data() will be undefined in this case
    return null;
  }
    
}

export const updateLastId = async () => {
  var lastId = fetchLastId();
  try {
    await setDoc(doc(db, "id",`lastid`),{id: lastId});
    console.log("ID registered: ", lastId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return lastId
}

