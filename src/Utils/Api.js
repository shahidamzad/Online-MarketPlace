export const fetchServiceDetails = async (id) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      const services = [
        {
          id: 1,
          name: 'Web Development',
          description: 'Professional web development services for your business.',
          price: 500,
          duration: 10,
          additionalInfo: 'Includes responsive design and SEO optimization.',
        },
        {
          id: 2,
          name: 'Mobile App Development',
          description: 'Build high-quality mobile apps for iOS and Android.',
          price: 800,
          duration: 20,
          additionalInfo: 'Includes backend integration and push notifications.',
        },
      ];
      const service = services.find((s) => s.id === parseInt(id));
      resolve(service || null);
    }, 1000); 
  });
};