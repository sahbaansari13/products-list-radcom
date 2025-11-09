import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ProductList from '@/components/product/ProductList';
import { Product, ProductsResponse } from '@/types/products';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products?limit=30&skip=50', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  const data: ProductsResponse = await res.json();
  return data.products;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <MainLayout>
      <ProductList products={products} />
    </MainLayout>
  );
}