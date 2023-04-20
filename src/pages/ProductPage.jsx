import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ProductPage = () => {
  const id = useParams().productId;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const docRef = doc(db, "products", id);
      const productDoc = await getDoc(docRef);
      setProduct({...productDoc.data(), id: productDoc.id});
      setIsLoading(false);
    };
    getProduct();
  }, []);
  console.log(product);
  if (isLoading) {
    return (
      <>
        <span class="font-title text-2xl font-bold">Loading... </span>
      </>
    );
  } else {
    return (
      <>
        <div class="content-center">
          <img
            src={product.imageLink}
            class="shadow-lg w-20 h-20"
            alt={"Image of " + product.name}
          />
          <span class="font-title text-2xl font-bold">{product.name}</span>
          <span class="font-title text-xl font-bold">{product.price}</span>
          <span class="font-title text-xl">{product.description}</span>
          <hr />
          <span class="font-title text-xl">
            Stock Status: {product.stockCount !== 0 ? "✅" : "❌"}
          </span>
          <span class="font-title text-xl">
            Stock Count: {product.stockCount}
          </span>
        </div>
      </>
    );
  }
};
