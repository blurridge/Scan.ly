import { doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import { ref, deleteObject } from "firebase/storage";

export const deleteProduct = async (id) => {
    const storageRef = ref(storage, `${id}-thumb.jpg`);
    await deleteDoc(doc(db, "products", id));
    deleteObject(storageRef).then(() => {
        console.log("Photo deleted successfully.");
      }).catch((error) => {
        console.log("Error deleting product photo.");
      });
}