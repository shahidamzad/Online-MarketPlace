import React from 'react';
import ServiceCard from '../Component/Services/ServiceCard';

const Services = () => {
  const services = [
    { id: 1, name: 'Service 1', description: 'Description for Service 1' },
    { id: 2, name: 'Service 2', description: 'Description for Service 2' },
    // Add more services here
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;