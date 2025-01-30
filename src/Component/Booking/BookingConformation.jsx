import React from 'react';

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Confirmed</h2>
        <p className="text-lg text-gray-600">Your booking has been successfully confirmed.</p>
      </div>
    </div>
  );
};

export default BookingConfirmation;