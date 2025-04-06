import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Smartphone, List, Video, Bot, Navigation, BookOpen, Tablets, Shield } from 'lucide-react';

const Process = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Open the App",
      description: "Available in web/mobile formats"
    },
    {
      icon: <List className="h-6 w-6" />,
      title: "Choose Service",
      description: "Select from various healthcare options"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Use the Service",
      description: "Connect with doctors or access resources"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Storage",
      description: "Health data saved securely with offline capability"
    }
  ];

  const services = [
    { icon: <Video className="h-5 w-5" />, text: "Book doctor appointment" },
    { icon: <Bot className="h-5 w-5" />, text: "Interact with AI" },
    { icon: <Navigation className="h-5 w-5" />, text: "Navigate to nearby center" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Access health content" },
    { icon: <Tablets className="h-5 w-5" />, text: "Request medicine" }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works – Simple & Effective</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access quality healthcare in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-200" />
                )}
              </div>
            ))}
          </div>

          <div className="bg-teal-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    {service.icon}
                  </div>
                  <span className="text-gray-700">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;