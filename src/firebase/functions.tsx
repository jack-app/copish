import React,{useState} from "react";
import { getFirestore, setDoc, collection, doc, getDoc, addDoc, arrayUnion } from "firebase/firestore";
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
export const saveDatabase = async (xmlid: number,obj: object) => {
  try {
    await setDoc(doc(db, "data",`${xmlid}`), obj);
    console.log("Document written with ID: ", xmlid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const saveStorage = async (file: File) => {
  var lastId = await fetchLastId();
  const xmlRef = ref(storage, `xmlfiles/${lastId}.xml`);

  // 'file' comes from the Blob or File API
  uploadBytes(xmlRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  }).catch((error) => {
    // Handle any errors
    console.log(error);
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
    return Number(docSnap.data().id);
  } else {
    // doc.data() will be undefined in this case
    throw new Error("id取得に失敗しました");
    console.log("id取得に失敗しました");
  }
    
}

export const updateLastId = async () => {
  const lastId: number = await fetchLastId();
  console.log('lastId is ',lastId);
  const newLastId = lastId+1;
  console.log(lastId, newLastId);
  try {
    await setDoc(doc(db, "id",`lastid`),{id: newLastId});
    console.log("ID registered: ", newLastId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return newLastId
}

//tagとってくる関数
// 待ってこれおかしい，data/tagから持って来れる
//この関数いらないかも
export const fetchTags = async (id: number|string) => {
  const docRef = doc(db, "tag", `${id}`);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    return null;
  }
    
}
//tag追加する関数
export const addTag = async (tags: string, id:number) => {
  let tagList = tags.split(/\s/);
  console.log(tagList);
  // try {
  //   for(var tag of tagList){
  //     console.log(tag);
  //     const docRef = await addDoc(collection(db,`tag/${tag}`),{
  //       id: id
  //     });
  //     console.log("タグ registered: ", tag);
  //   }
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  // これ，一回idの一覧をfetchしてきて，lengthみて，idを追加しないといけないのでは？？（めんど）
  try {
    for(var tag of tagList){

      await setDoc(doc(db, "tag",`${tag}`),{
        id:arrayUnion(id)
      });
      console.log("タグ registered: ", tag);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}
