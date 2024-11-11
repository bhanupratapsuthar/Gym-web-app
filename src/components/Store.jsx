import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, Products, Loading, Errors } from "../redux/slices/productSlice"; // Adjust path if needed
import { Link } from "react-router-dom";  // Import Link for navigation

const Store = () => {
    const dispatch = useDispatch();
    const products = useSelector(Products);
    const loading = useSelector(Loading);
    const error = useSelector(Errors);

    useEffect(() => {
        // Only fetch products if they are not already in the state
        if (!products || products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="flex flex-row gap-5 flex-wrap mb-5">
            {products.map((product) => {
                const originalPrice = product.price * 1.3;
                const discountPercentage = ((originalPrice - product.price) / originalPrice) * 100;

                return (
                    <div key={product._id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <Link to={`/product/${product._id}`}> {/* Link to individual product page */}
                            <img className="h-60 w-full object-cover object-center" src={product.image} alt="Product Image" />
                        </Link>
                        <div className="p-4">
                            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.name}</h2>
                            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.description}</p>
                            <div className="flex items-center">
                                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">Rs {product.price}</p>
                                <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">Rs {originalPrice.toFixed(0)}</p>
                                <p className="ml-auto text-base font-medium text-green-500">{discountPercentage.toFixed(0)}% off</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Store;
