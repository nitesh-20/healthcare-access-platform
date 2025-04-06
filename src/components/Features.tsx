import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Video, Bot, MapPin, HardDrive, BookOpen, AlarmPlus as Alarm, Tablets, Calendar } from 'lucide-react';

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Telemedicine Consultations",
      description: "Video/audio calls with doctors, optimized for rural internet"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Symptom Checker",
      description: "Get early guidance based on symptoms using Gemini API"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Nearby Clinics & Health Camps",
      description: "Find medical help around you using Google Maps"
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Offline Health Records",
      description: "Store data locally; sync to cloud when online"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Health Education Hub",
      description: "Watch short videos and guides in local languages"
    },
    {
      icon: <Alarm className="h-6 w-6" />,
      title: "Emergency Help Button",
      description: "One-tap call to ambulance with location sharing"
    },
    {
      icon: <Tablets className="h-6 w-6" />,
      title: "Medicine Request & Donation",
      description: "Request basic meds; connect with pharmacies or NGOs"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Booking",
      description: "Reserve slots for teleconsults or health camps"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features That Make the Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed for accessibility and ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;