'use client';

import React from 'react';
import { useAppSelector } from '@/hooks/useCart';

const TestCart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);

  console.log('Cart state:', cart);

  return (
    <div style={{ padding: '10px', background: '#f0f0f0', margin: '10px' }}>
      <h3>Debug Cart:</h3>
      <p>Items: {cart.items.length}</p>
      <p>Total: ${cart.total}</p>
      <pre>{JSON.stringify(cart.items, null, 2)}</pre>
    </div>
  );
};

export default TestCart;