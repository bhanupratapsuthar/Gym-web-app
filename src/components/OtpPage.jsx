import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { RefreshCw } from 'lucide-react';
import OtpInput from './OtpInput';

const OtpPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const email = state?.email;
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:8000/auth/verify-email', {
        email,
        otp: parseInt(otpString),
      });

      toast.success('Email verified successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setError('Invalid OTP');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      await axios.post('http://localhost:8000/auth/resend-otp', { email });
      toast.success('New OTP has been sent to your email');
    } catch (error) {
      toast.error('Failed to resend OTP. Please try again.');
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="text-white text-center">
          <p className="text-xl">Invalid access. Please go back and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-12">
      <div className="nothing flex flex-col items-center w-full max-w-md bg-gray-800/50 rounded-lg shadow-md px-8 py-8 lg:py-12">
        <h1 className="text-center text-3xl font-extrabold text-white mb-6">
          Verify Your Account
        </h1>
        <p className="text-gray-400 text-center mb-8">
          We've sent a 6-digit OTP to your email:{" "}
          <span className="text-yellow-500 font-semibold">{email}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <OtpInput
            value={otp}
            onChange={setOtp}
            error={error}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium 
              ${isSubmitting 
                ? "bg-gray-600 text-gray-300 cursor-not-allowed" 
                : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"} 
              transition-colors`}
          >
            {isSubmitting ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleResendOtp}
            disabled={isSubmitting}
            className="text-yellow-500 hover:text-yellow-400 font-medium flex items-center justify-center gap-2"
          >
            <RefreshCw className="h-5 w-5" />
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
