import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const { totalQuantity } = useSelector(state => state.cart);

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
