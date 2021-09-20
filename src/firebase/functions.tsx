import { getFirestore, setDoc, collection, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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

export const sendStorage = (file: File,name:any) => {
  const xmlRef = ref(storage, `xmlfiles/${name}`);
  // 'file' comes from the Blob or File API
  uploadBytes(xmlRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}

export const getXMLFile = (id:string) => {
  getDownloadURL(ref(storage, `xmlfiles/${id}.xml`))
  .then((url) => {
    // console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.onload = (e) => {
      const xml = xhr.responseXML;
      if (xml != null){
        console.log('yes takasu clinic!')
        console.log(xml);
      } else {
        console.log('not xml file');
      };
      xhr.open("GET", url);
      xhr.send();
    }
    // fetch(url)
    // .then(response => {
    //   console.log(response.blob);
    //   var reader = new FileReader();
    //   console.log(reader.result);
    // })
  })
  .catch((error) => {
    // Handle any errors
    console.log(error);
  });

}