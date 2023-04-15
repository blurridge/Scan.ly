import React, { useEffect, useState } from "react";
import { Statusbar } from "./Statusbar";
import { ProductList } from "./ProductList";
import { AddProductDialog } from "./AddProductDialog";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const MainContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("timeAdded", "desc"));
    const unsubscribe = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div class="flex flex-col flex-1 mt-10 gap-5 pl-40 pr-10 h-[calc(100vh-40px)]">
        <Statusbar products={products} />
        <span class="font-title font-bold text-4xl">Inventory</span>
        <div class="flex justify-between items-center">
          <div>
            <span class="font-title font-bold text-2xl mr-10">
              All Inventory
            </span>
            <span class="font-title font-bold text-2xl">Low Stock</span>
          </div>
          <AddProductDialog />
        </div>
        <div class="h-full overflow-y-auto">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
};
