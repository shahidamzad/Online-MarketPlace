import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams();

  // Fetch service details based on the id
  const service = {
    id: 1,
    name: 'Service 1',
    description: 'Detailed description for Service 1',
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
      <p className="mt-4 text-lg text-gray-600">{service.description}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Book Now
      </button>
    </div>
  );
};

export default ServiceDetails;