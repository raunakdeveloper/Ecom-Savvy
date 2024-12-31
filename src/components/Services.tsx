import React from 'react';
import { Camera, Search, LayoutGrid, Share2 } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      title: "Product Photography",
      description: "Professional product photos that capture attention and drive sales.",
      imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "SEO Optimization",
      description: "Boost your search rankings and attract qualified traffic to your store.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      icon: <LayoutGrid className="w-8 h-8 text-blue-600" />,
      title: "Store Management",
      description: "End-to-end management solutions for your e-commerce business.",
      imageUrl: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-600" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to grow your brand presence.",
      imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  const sendMessage = (serviceTitle) => {
    const message = `Hello, I am interested in your service: ${serviceTitle}. Please provide more details.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '7510016618';
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Services</h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Comprehensive solutions to help your e-commerce business thrive in the digital marketplace.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} onLearnMore={() => sendMessage(service.title)} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, imageUrl, onLearnMore }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-8">
        <div className="mb-4">{icon}</div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <button 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={onLearnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Services;
