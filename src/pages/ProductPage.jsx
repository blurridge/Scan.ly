import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { RotatingSquare } from "react-loader-spinner";
import { ProductFooter } from "../components/ProductFooter";

export const ProductPage = () => {
  const id = useParams().productId;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const docRef = doc(db, "products", id);
      const productDoc = await getDoc(docRef);
      setProduct({ ...productDoc.data(), id: productDoc.id });
      setIsLoading(false);
    };
    getProduct(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return (
      <>
        <div class="flex flex-col items-center justify-center h-screen">
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
      </>
    );
  } else if (!isLoading && product.hasOwnProperty("name")) {
    return (
      <>
        <div class="flex flex-col gap-10 h-screen">
          <div class="flex-[1_0_auto]">
            <div class="flex flex-col items-center justify-center mt-10 mx-10 text-center">
              <img
                src={product.imageLink}
                class="rounded-lg shadow-lg max-h-80 mb-10"
                alt={"Image of " + product.name}
              />
              <span class="font-title text-4xl font-bold mb-3">
                {product.name}
              </span>
              <span class="font-title text-2xl font-bold mb-7">
                {"PHP " + product.price}
              </span>
              <span class="font-title text-xl">{product.description}</span>
            </div>
            <hr class="h-px my-10 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-100" />
            <div class="flex flex-col items-center mx-10 text-center">
              <span class="font-title text-xl">
                Stock Status: {product.stockCount !== 0 ? "✅" : "❌"}
              </span>
              <span class="font-title text-xl">
                Stock Count: {product.stockCount}
              </span>
            </div>
          </div>
          <ProductFooter />
        </div>
      </>
    );
  } else {
    return (
      <>
        <>
          <div class="flex flex-col items-center justify-center h-screen">
            <span class="font-title text-2xl font-bold">
              Sorry! Product does not exist.
            </span>
          </div>
        </>
      </>
    );
  }
};
