import { doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import { ref, deleteObject } from "firebase/storage";

export const deleteProduct = async (id) => {
  const thumbRef = ref(storage, `${id}-thumb.jpg`);
  const qrRef = ref(storage, `${id}-qr.jpg`);
  await deleteDoc(doc(db, "products", id));
  deleteObject(thumbRef)
    .then(() => {
      console.log("Photo deleted successfully.");
    })
    .catch((error) => {
      console.log("Error deleting product photo.");
    });
  deleteObject(qrRef)
    .then(() => {
      console.log("QR deleted successfully.");
    })
    .catch((error) => {
      console.log("Error deleting product QR.");
    });
};
