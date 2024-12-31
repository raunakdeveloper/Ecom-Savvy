import React from 'react';
import TeamMember from './TeamMember';

function About() {
  const teamMembers = [
    {
      name: 'Akash Gupta',
      role: 'Founder & CEO',
      image: 'https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Visionary leader with over 10 years of experience in e-commerce solutions and digital transformation.'
    },
    {
      name: 'Divyajeet Gupta',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
      description: 'Strategic innovator driving business growth through cutting-edge e-commerce strategies.'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Leadership</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the visionaries behind Ecom Savvy who are transforming the e-commerce landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

export default About;