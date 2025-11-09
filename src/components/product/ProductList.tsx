import React from 'react';
import { Product } from '@/types/products';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Latest Products</h2>
          <p className={styles.subtitle}>
            Discover our amazing collection of tech products
          </p>
        </div>
        
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;