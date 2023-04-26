import React, { useEffect, useState } from "react";
import { Statusbar } from "./Statusbar";
import { ProductList } from "./ProductList";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { AddProductDialog } from "../modals/AddProductDialog";
import { AddProductButton } from "./AddProductButton";
import { RotatingSquare } from "react-loader-spinner";

export const MainContent = () => {
  const [products, setProducts] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [productProps, setProductProps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("timeAdded", "desc"));
    const unsubscribe = onSnapshot(q, (snap) => {
      setIsLoading(true);
      const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
      setProductProps(data);
      setLowStock(data.filter((product) => product.stockCount <= 5));
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const showLowStock = () => {
    setProductProps(lowStock);
  };

  const showAllProducts = () => {
    setProductProps(products);
  };

  if (isLoading) {
    return (
      <>
        <div class="flex flex-col flex-1 mt-10 gap-5 pl-40 pr-10 h-[calc(100vh-40px)] overflow-hidden">
          <Statusbar products={products} />
          <span class="font-title font-bold text-4xl">Inventory</span>
          <div class="flex justify-between items-center">
            <div>
              <button
                type="button"
                class="rounded-full bg-gray-300 hover:bg-gray-400 px-5 py-2 mr-5"
                onClick={showAllProducts}
                data-te-ripple-init
              >
                <span class="font-title font-bold text-lg">All Inventory</span>
              </button>
              <button
                type="button"
                class="rounded-full bg-gray-300 hover:bg-gray-400 px-5 py-2 mr-5"
                onClick={showLowStock}
                data-te-ripple-init
              >
                <span class="font-title font-bold text-lg">Low Stock</span>
              </button>
            </div>
            <AddProductButton />
            <AddProductDialog />
          </div>
          <div class="flex items-center justify-center h-screen">
            <RotatingSquare
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="rotating-square-loading"
              strokeWidth="4"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="flex flex-col flex-1 mt-10 gap-5 pl-40 pr-10 h-[calc(100vh-40px)] overflow-hidden">
          <Statusbar products={products} />
          <span class="font-title font-bold text-4xl">Inventory</span>
          <div class="flex justify-between items-center">
            <div>
              <button
                type="button"
                class="rounded-full bg-gray-300 hover:bg-gray-400 px-5 py-2 mr-5"
                onClick={showAllProducts}
                data-te-ripple-init
              >
                <span class="font-title font-bold text-lg">All Inventory</span>
              </button>
              <button
                type="button"
                class="rounded-full bg-gray-300 hover:bg-gray-400 px-5 py-2 mr-5"
                onClick={showLowStock}
                data-te-ripple-init
              >
                <span class="font-title font-bold text-lg">Low Stock</span>
              </button>
            </div>
            <AddProductButton />
            <AddProductDialog />
          </div>
          <div class="text-center overflow-y-auto">
            <ProductList products={productProps} />
          </div>
        </div>
      </>
    );
  }
};
