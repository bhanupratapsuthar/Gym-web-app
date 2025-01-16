import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { BlogCard } from './BlogCard';
import { toast } from 'react-toastify';
import { createBlog } from '../../services/blogApis';
import { Blogs, fetchBlogs } from '../../redux/slices/blogSlice';

export function BlogList() {
  const user = useSelector((state) => state.auth.user?.user);
  const role = user ? user.role : null;
  const isAdmin = role === 'Admin';
  const dispatch = useDispatch();
  const blogs = useSelector(Blogs);




  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false)
  const [blogCreated,setBlogCreated] = useState(false)
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
      const response = await createBlog(data, image);
      toast.success('Blog created successfully!');
      setBlogCreated(true)

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
    // Only fetch products if they are not already in the state
    if (!blogs || blogs.length === 0 || blogCreated) {
      dispatch(fetchBlogs());
      setBlogCreated(false)
    }
  }, [dispatch, blogs,blogCreated]);

  return (
    <div className='w-full bg-slate-900'>
      <div className="w-11/12 mx-auto px-4 py-12 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Fitness Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover expert tips, workout guides, and nutrition advice to help you achieve your fitness goals.
          </p>
        </div>

        {
            isAdmin && (
                <div className="flex justify-end mt-10">
                    <button onClick={() => setShowForm(prev => !prev)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add Blog +
                        </span>
                    </button>
                </div>
            )
        }

        {isAdmin && showForm &&(
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Title */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                  type="text"
                  {...register('title', { required: 'Title is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
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
                <label className="block text-gray-700 font-bold mb-2">Author</label>
                <input
                  type="text"
                  {...register('author', { required: 'Author is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
              </div>

              {/* Excerpt */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Excerpt</label>
                <textarea
                  {...register('excerpt', { required: 'Excerpt is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
                {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt.message}</p>}
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

              {/* Content */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Content</label>
                <textarea
                  {...register('content', { required: 'Content is required' })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  rows="5"
                />
                {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Publish Blog
              </button>
            </form>
          </div>
        )}

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}