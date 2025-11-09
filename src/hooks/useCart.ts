import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom hook for cart operations
export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const getTotalItems = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getItemQuantity = (productId: number) => {
    const item = cart.items.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const isInCart = (productId: number) => {
    return cart.items.some((item) => item.product.id === productId);
  };

  return {
    ...cart,
    getTotalItems,
    getItemQuantity,
    isInCart,
  };
};