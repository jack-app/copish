import { getFirestore } from "firebase/firestore";
import { app } from "./config/config"

const db = getFirestore(app);

// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore";

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
