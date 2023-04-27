import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const deleteUser = async (id) => {
  await deleteDoc(doc(db, "users", id));
};
