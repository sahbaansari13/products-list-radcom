import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import { CartItem } from '@/types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom hook for cart operations
export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const getTotalItems = (): number => {
    return cart.items.reduce((total: number, item: CartItem) => total + item.quantity, 0);
  };

  const getItemQuantity = (productId: number): number => {
    const item = cart.items.find((item: CartItem) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const isInCart = (productId: number): boolean => {
    return cart.items.some((item: CartItem) => item.product.id === productId);
  };

  return {
    ...cart,
    getTotalItems,
    getItemQuantity,
    isInCart,
  };
};