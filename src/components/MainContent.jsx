import React, { useEffect, useState } from "react";
import { Statusbar } from "./Statusbar";
import { ProductList } from "./ProductList";
import { UserList } from "./UserList";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { AddProductDialog } from "../modals/AddProductDialog";
import { AddProductButton } from "./AddProductButton";
import { AddUserButton } from "./AddUserButton";
import { AddUserDialog } from "../modals/AddUserDialog";
import { RotatingSquare } from "react-loader-spinner";
import { CurrentContent } from "../context/ContentContext";

export const MainContent = () => {
  const [products, setProducts] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [users, setUsers] = useState([]);
  const [productProps, setProductProps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeContent } = CurrentContent();

  useEffect(() => {
    if (activeContent === "users") {
      const q = query(collection(db, "users"), orderBy("timeAdded", "desc"));
      const unsubscribe = onSnapshot(q, (snap) => {
        setIsLoading(true);
        const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(data);
        setIsLoading(false);
      });
      return () => unsubscribe();
    } else {
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
    }
  }, [activeContent]);

  const showLowStock = () => {
    setProductProps(lowStock);
  };

  const showAllProducts = () => {
    setProductProps(products);
  };

  if (activeContent === "products") {
    if (isLoading) {
      return (
        <>
          <div class="flex flex-col flex-1 mt-10 gap-5 pl-40 pr-10 h-[calc(100vh-40px)] overflow-hidden">
            <Statusbar props={products} />
            <span class="font-title font-bold text-4xl">Inventory</span>
            <div class="flex justify-between items-center">
              <div>
                <button
                  type="button"
                  class="rounded-full bg-gray-300 hover:bg-gray-400 px-5 py-2 mr-5"
                  onClick={showAllProducts}
                  data-te-ripple-init
                >
                  <span class="font-title font-bold text-lg">
                    All Inventory
                  </span>
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
            <Statusbar props={products} />
            <span class="font-title font-bold text-4xl">Inventory</span>
            <div class="flex justify-between items-center">
              <div>
                <button
                  type="button"
                  class="rounded-full bg-gray-300 hover:bg-gray-400 px-5 py-2 mr-5"
                  onClick={showAllProducts}
                  data-te-ripple-init
                >
                  <span class="font-title font-bold text-lg">
                    All Inventory
                  </span>
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
            <div class="overflow-y-auto">
              <ProductList products={productProps} />
            </div>
          </div>
        </>
      );
    }
  } else {
    if (isLoading) {
      return (
        <>
          <div class="flex flex-col flex-1 mt-10 gap-5 pl-40 pr-10 h-[calc(100vh-40px)] overflow-hidden">
            <Statusbar props={users} />
            <span class="font-title font-bold text-4xl">Users</span>
            <div class="flex justify-between items-center">
              <div>
                <span class="font-title font-bold text-lg">All Users</span>
              </div>
              <AddUserButton />
              <AddUserDialog />
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
            <Statusbar props={users} />
            <span class="font-title font-bold text-4xl">Users</span>
            <div class="flex justify-between items-center">
              <div>
                <span class="font-title font-bold text-2xl">All Users</span>
              </div>
              <AddUserButton />
              <AddUserDialog />
            </div>
            <div class="overflow-y-auto">
              <UserList users={users} />
            </div>
          </div>
        </>
      );
    }
  }
};
