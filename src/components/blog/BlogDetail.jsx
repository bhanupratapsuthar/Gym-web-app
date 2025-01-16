import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Blogs, deleteBlog } from '../../redux/slices/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteBlogApi } from '../../services/blogApis';
import { RiDeleteBin6Line } from 'react-icons/ri';


export function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = useSelector(Blogs)
  const post = blogs.find(post => post._id === id);

  const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user?.user);
    const role = user ? user.role : null;
    const isAdmin = role === 'Admin';
  
    const onDeleteButtonClick = async (blogId) => {
      const toastId = toast.loading("Loading...");
      try {
        const response = await deleteBlogApi(blogId);
        if(response.success){
              toast.success('Blog deleted successfully!');
              dispatch(deleteBlog(blogId));
              navigate("/blogs")
          }
      } catch (error) {
          console.error(error);
          toast.error('Error deleting product');
      }finally {
          toast.dismiss(toastId);
        }
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-white">Post not found</h2>
        <button
          onClick={() => navigate('/blogs')}
          className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className='bg-slate-900'>
        <article className=" max-w-3xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/blogs')}
        className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </button>
      
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-full object-cover rounded-xl mb-8"
      />
      
      <div className="space-y-4">
        <span className="text-purple-400 font-semibold">{post.category}</span>
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl font-bold text-white">{post.title}</h1>
            {
             isAdmin && <RiDeleteBin6Line onClick={()=> onDeleteButtonClick(post._id)} size={22} className="text-red-500" />                 
            }
        </div>
        
        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">{post.content}</p>
        </div>
      </div>
    </article>
    </div>
  );
}
