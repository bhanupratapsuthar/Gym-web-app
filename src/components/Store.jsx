import axios from "axios";
import React, { useEffect, useState } from "react";

const Store = () => {
    const [products, setProducts] = useState([]);

    const productsData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/product/allProducts');
            console.log(response)
            if (response.status === 200) {
                setProducts(response?.data?.products);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        productsData();
    }, []);

    return (
        <div className="flex flex-row gap-5 flex-wrap mb-5">
            {products.map((product) => {
                // Calculate original price as 30% higher than sale price
                const originalPrice = product.price * 1.3;
                // Calculate discount percentage
                const discountPercentage = ((originalPrice - product.price) / originalPrice) * 100;

                return (
                    <div key={product.id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        <img className="h-60 w-full object-cover object-center" src={product.image} alt="Product Image" />
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
