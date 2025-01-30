import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchServiceDetails } from '../../utils/api'; // Mock API function

const ServiceDetails = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch service details when the component mounts
    const getServiceDetails = async () => {
      try {
        const data = await fetchServiceDetails(id); // Fetch details for the service ID
        setService(data);
      } catch (error) {
        console.error('Error fetching service details:', error);
      } finally {
        setLoading(false);
      }
    };

    getServiceDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!service) {
    return <div className="text-center py-8">Service not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{service.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{service.description}</p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Price</h2>
              <p className="text-gray-600">${service.price}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Duration</h2>
              <p className="text-gray-600">{service.duration} hours</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Additional Info</h2>
              <p className="text-gray-600">{service.additionalInfo}</p>
            </div>
          </div>
          <button
            onClick={() => window.history.back()}
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;