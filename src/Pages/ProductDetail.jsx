import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Products } from "../redux/slices/productSlice";

const ProductDetail = () => {
    const { id } = useParams();  // Get product ID from URL
    const products = useSelector(Products);  // Get all products from the Redux store

    // Find the product with the corresponding ID
    const product = products.find((product) => product._id === id);

    if (!product) {
        return <p>Product not found!</p>;
    }

    const originalPrice = product.price * 1.3;
    const discountPercentage = ((originalPrice - product.price) / originalPrice) * 100;

    return (
        <div className="flex justify-center items-center py-10 px-4 bg-gray-50">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Product Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            className="w-full h-96 object-cover"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 p-6">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-3">{product.name}</h2>
                        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-semibold text-gray-800">Rs {product.price}</span>
                                <span className="text-sm text-gray-500 line-through">Rs {originalPrice.toFixed(0)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-medium text-green-600">{discountPercentage.toFixed(0)}% OFF</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
