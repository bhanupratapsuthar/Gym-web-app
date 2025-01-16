import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, Products, Loading, Errors } from "../redux/slices/productSlice"; // Adjust path if needed
import { useNavigate } from "react-router-dom";  // Import Link for navigation
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { createProduct } from "../services/productApis";

const Store = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(Products);
    const loading = useSelector(Loading);
    const error = useSelector(Errors);
    const user = useSelector((state) => state.auth.user?.user);
    const role = user ? user.role : null;
    const isAdmin = role === 'Admin';

    const [image, setImage] = useState(null);
    const [showForm, setShowForm] = useState(false)
    const [productCreated,setProductCreated] = useState(false)
      const [previewImage, setPreviewImage] = useState(null);
      const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();


        const onDrop = useCallback((acceptedFiles) => {
          const file = acceptedFiles[0];
          if (file) {
            const preview = URL.createObjectURL(file);
            setPreviewImage(preview);
            setImage(file);
          }
        }, []);
      
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop,
          accept: { 'image/*': [] },
          multiple: false,
        });
      
        const onSubmit = async (data) => {
          const toastId = toast.loading("Loading...");
          try {
            const response = await createProduct(data, image);
            // console.log('Blog created successfully:', response.data);
            setProductCreated(true)
            toast.success('Product created successfully!');
      
            // Reset the form
            reset();
            setImage(null);
            setPreviewImage(null);
          } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || 'Error creating blog');
          } finally {
            toast.dismiss(toastId);
          }
        };

        useEffect(() => {
            if (!products || products.length === 0 || productCreated) {
                dispatch(fetchProducts());
                setProductCreated(false)
            }
        }, [dispatch, products,productCreated]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>

        {
            isAdmin && (
                <div className="flex justify-end mt-10">
                    <button onClick={() => setShowForm(prev => !prev)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add Product +
                        </span>
                    </button>
                </div>
            )
        }
        {isAdmin && showForm && (
          <div className="bg-slate-100 mt-10 p-6 rounded-lg shadow-md max-w-lg mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">Create a New Product Post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Product Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Product Name is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Category</label>
                <input
                  type="text"
                  {...register('category', { required: 'Category is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Quantity</label>
                <input
                  type="number"
                  {...register('quantity', { required: 'Quantity is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
              </div>

              
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Price</label>
                <input
                    type="number"
                  {...register('price', { required: 'Price is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
              </div>

              {/* Image Drop Zone */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Upload Image</label>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed p-4 rounded-lg text-center cursor-pointer ${
                    isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className="text-blue-500 font-semibold">Drop the image here...</p>
                  ) : (
                    <p className="text-gray-600">Drag & drop an image here, or click to select</p>
                  )}
                </div>
                {previewImage && (
                  <div className="mt-4">
                    <h3 className="text-gray-700 font-bold">Image Preview:</h3>
                    <img
                      src={previewImage}
                      alt="Uploaded Preview"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Description</label>
                <textarea
                  {...register('description', { required: 'Description is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  rows="5"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Publish Product
              </button>
            </form>
          </div>
        )}

        <div className=" flex flex-row gap-5 flex-wrap mb-5">
            {products.map((product) => {
                const originalPrice = product.price * 1.3;
                const discountPercentage = ((originalPrice - product.price) / originalPrice) * 100;

                return (
                    <div onClick={() => navigate(`/product/${product._id}`)} key={product._id} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                        
                        <img className="h-60 w-full object-cover object-center" src={product.image} alt="Here is a product" />
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
        </>
    );
};

export default Store;
