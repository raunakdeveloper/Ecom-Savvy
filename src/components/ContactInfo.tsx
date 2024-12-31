import React, { ReactNode } from 'react';

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  content: string;
}

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-white p-3 rounded-full shadow-md">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default ContactInfo;