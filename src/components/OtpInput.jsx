import React, { useRef } from 'react';

const OtpInput = ({ value, onChange, error }) => {
  const inputRefs = useRef([]);

  const focusNext = (index) => {
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const focusPrevious = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!value[index]) {
        focusPrevious(index);
      }
    }
  };

  const handleChange = (e, index) => {
    const newValue = e.target.value;
    if (newValue.length > 1) return;

    const newOtp = [...value];
    newOtp[index] = newValue;
    onChange(newOtp);

    if (newValue) {
      focusNext(index);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...value];

    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }

    onChange(newOtp);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 justify-center">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={`w-12 h-14 text-center text-xl font-semibold rounded-lg border-2 
              bg-gray-800 text-white 
              ${error ? 'border-red-500' : 'border-gray-700'}
              focus:border-blue-500 focus:outline-none transition-colors`}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
  );
};

export default OtpInput;
