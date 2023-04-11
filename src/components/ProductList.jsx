import React from 'react';
import { ProductRow } from './ProductRow';

export const ProductList = ( {products} ) => {
  return products.map((product, index) => <ProductRow key={index} product={product} />);
}
