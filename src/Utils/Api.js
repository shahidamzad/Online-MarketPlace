export const fetchServices = async () => {
    // Mock API call
    return [
      { id: 1, name: 'Service 1', description: 'Description for Service 1' },
      { id: 2, name: 'Service 2', description: 'Description for Service 2' },
    ];
  };
  
  export const fetchServiceDetails = async (id) => {
    // Mock API call
    return {
      id: 1,
      name: 'Service 1',
      description: 'Detailed description for Service 1',
    };
  };
  
  export const bookService = async (serviceId, date, time) => {
    // Mock API call
    return { success: true };
  };