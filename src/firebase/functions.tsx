import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./config/config"

const storage = getStorage(app);
const db = getFirestore(app);

// Create a storage reference from our storage service
// const xmlRef = ref(storage, 'xmlfiles');

export const test = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    });
    console.log("Document written with ID: ", docRef.id);
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