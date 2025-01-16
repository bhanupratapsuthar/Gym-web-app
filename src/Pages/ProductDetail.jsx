import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, Products } from "../redux/slices/productSlice";
import { ShoppingCart, ShoppingBag } from "lucide-react";
import { addToCart } from "../redux/slices/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { deleteProuductApi } from "../services/productApis";

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(Products);
    const cartItems = useSelector((state) => state.cart.items);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user?.user);
    const role = user ? user.role : null;
    const isAdmin = role === 'Admin';   

    const product = products.find((product) => product._id === id);
    const isInCart = cartItems.some((item) => item._id === id);

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-gray-600">Product not found!</p>
            </div>
        );
    }

    const originalPrice = product.price * 1.3;
    const discountPercentage = ((originalPrice - product.price) / originalPrice) * 100;

    const handleAddToCart = () => {
        dispatch(addToCart({
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
        }));
    };

    const handleGoToCart = () => {
        navigate('/cart');
    };

    const onDeleteButtonClick = async (productId) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await deleteProuductApi(productId);
            if(response.success){
                dispatch(deleteProduct(productId));
                toast.success('Product deleted successfully!');
                navigate("/store")
            }
        } catch (error) {
            console.error(error);
            toast.error('Error deleting product');
        }finally {
            toast.dismiss(toastId);
          }
    }

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
                        <div className="flex flex-row justify-between">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-3">{product.name}</h2>
                            {
                               isAdmin && <RiDeleteBin6Line onClick={()=> onDeleteButtonClick(product._id)} size={22} className="text-red-500" />
                                
                            }
                        </div>
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
                            {isInCart  ? (
                                <button
                                    onClick={handleGoToCart}
                                    className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 flex items-center justify-center gap-2 transition-colors duration-200"
                                >
                                    <ShoppingBag size={20} />
                                    Go to Cart
                                </button>
                            ) : (
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center gap-2 transition-colors duration-200"
                                >
                                    <ShoppingCart size={20} />
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
