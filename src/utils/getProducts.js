import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const productData = [];
export const getProducts = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "products"), orderBy("timeAdded", "desc"))
  );
  querySnapshot.forEach((doc) => {
    productData.push({ ...doc.data(), id: doc.id });
  });
  return productData;
};
