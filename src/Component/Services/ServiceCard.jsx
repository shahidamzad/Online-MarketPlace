import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
        <p className="mt-2 text-gray-600">{service.description}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;