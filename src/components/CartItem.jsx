import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ _id, name, price, image, quantity, onQuantityChange, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b last:border-b-0 gap-4 sm:gap-0">
      <img
        src={image}
        alt={name}
        className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-md"
      />
      
      <div className="flex-1 sm:ml-6">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">Rs {price}</p>
      </div>
      
      <div className="flex flex-row sm:flex-row items-center justify-between w-full sm:w-auto sm:space-x-4">
        <div className="flex items-center border rounded-lg">
          <button
            onClick={() => onQuantityChange(_id, quantity - 1)}
            className="p-2 hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button
            onClick={() => onQuantityChange(_id, quantity + 1)}
            className="p-2 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <button
          onClick={() => onRemove(_id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-full"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
