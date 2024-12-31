import { ShoppingBag, Search, Settings } from 'lucide-react';

function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Transform Your E-commerce Business</h1>
          <p className="text-xl mb-8 text-gray-600 leading-relaxed">We provide comprehensive solutions to help your online business thrive in today's competitive market.</p>
          {/* WhatsApp button */}
          <a
            href="https://wa.me/7510016618?text=Hello%2C%20I%20am%20interested%20in%20getting%20started%20with%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600" 
            alt="E-commerce Success" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <FeatureCard 
          icon={<ShoppingBag className="w-8 h-8 text-blue-600" />}
          title="Product Excellence"
          description="Professional product presentation and optimization for maximum impact."
        />
        <FeatureCard 
          icon={<Search className="w-8 h-8 text-blue-600" />}
          title="SEO Mastery"
          description="Boost your visibility with our expert SEO optimization services."
        />
        <FeatureCard 
          icon={<Settings className="w-8 h-8 text-blue-600" />}
          title="Store Management"
          description="Comprehensive management solutions for seamless operations."
        />
      </div>

      <div className="bg-blue-50 rounded-2xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[ 
            { number: "500+", text: "Satisfied Clients" },
            { number: "98%", text: "Success Rate" },
            { number: "24/7", text: "Support Available" },
            { number: "50+", text: "Expert Team Members" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;
