import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-blue-600 font-semibold mb-4">{role}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;