import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    // Access loading state from Redux store
    const isLoading = useSelector(state => state.auth.loading);

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            await dispatch(login({ email, password })).unwrap();
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during login:', error);
            toast.error("Login failed! Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="nothing p-8 sm:p-10">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="text-center text-3xl font-extrabold text-white mb-8">
                            Welcome Back
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    type="email"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })}
                                    type={showPassword ? "text" : "password"}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <Eye className="h-5 w-5" aria-hidden="true" />
                                    )}
                                </button>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Loading...
                                    </span>
                                ) : (
                                    'Sign in'
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-transparent text-gray-400">Or</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={() => navigate('/signup')}
                                className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-200 bg-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                            >
                                Create New Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;