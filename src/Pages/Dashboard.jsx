import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateProfile } from "../services/profileApi";

const Dashboard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { user } = useSelector((state) => state.auth.user);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            isVerified: true,
        }
    });

    useEffect(() => {
        if (user) {
            setValue("firstName", user.firstName);
            setValue("lastName", user.lastName);
            setValue("email", user.email);
            setValue("isVerified", user.isVerified);
        }
    }, [user, setValue]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const onSubmit = async ({firstName,lastName,email}) => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await updateProfile({ firstName, lastName, email });
          console.log('profile update successfully:', response.data);
          toast.success('Profile updated successfully!');
    
          setIsEditing(false);
        } catch (error) {
          console.error(error);
          toast.error(error?.response?.data?.message || 'Error updating profile');
        } finally {
          toast.dismiss(toastId);
        }
      };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {isEditing ? "Edit Profile" : "Profile"}
                    </h1>
                    <button
                        onClick={handleEditToggle}
                        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
                    >
                        {isEditing ? "Cancel" : "Edit"}
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            First Name
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                {...register("firstName", { required: "First Name is required" })}
                                className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{user?.firstName}</p>
                        )}
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Last Name
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                {...register("lastName", { required: "Last Name is required" })}
                                className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{user?.lastName}</p>
                        )}
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                            disabled
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Verification Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Account Verified
                        </label>
                        <p className="mt-1 text-gray-800">
                            {user?.isVerified ? "Yes" : "No"}
                        </p>
                    </div>

                    {/* Save Button */}
                    {isEditing && (
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition"
                            >
                                Save Changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Dashboard;