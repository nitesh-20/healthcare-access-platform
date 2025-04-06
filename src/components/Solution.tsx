import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Video, Bot, MapPin, Tablets, HardDrive } from 'lucide-react';

const Solution = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      text: "Consult certified doctors via low-bandwidth video calls",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      text: "Check symptoms using an AI chatbot in their own language",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      text: "Locate nearby clinics, health camps, and pharmacies",
    },
    {
      icon: <Tablets className="h-6 w-6" />,
      text: "Request medicine and connect with NGOs/pharmacies for donations",
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      text: "Store health records offline and sync when connected",
    },
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-2 mb-8">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">A Smart, Scalable Digital Health Companion</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our solution is a digital healthcare platform designed specifically for underserved communities. It combines telemedicine, AI-powered symptom checking, health awareness, and location-based services into one simple-to-use app.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      {feature.icon}
                    </div>
                    <p className="text-gray-600">{feature.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                By removing physical and financial barriers, our platform ensures that every individual, regardless of geography, can access timely and quality healthcare.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                alt="Digital healthcare solution"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                <p className="text-gray-600">Digital healthcare access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;