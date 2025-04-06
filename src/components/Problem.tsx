import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, ArrowRight } from 'lucide-react';

const Problem = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-2 mb-8">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h2 className="text-3xl font-bold text-gray-900">The Healthcare Gap in Underserved Communities</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Access to basic healthcare remains a major challenge in rural and underserved communities. Millions of people still face difficulties in consulting doctors, getting timely treatment, or even receiving basic health education. The lack of infrastructure, low doctor-to-patient ratio, poor internet connectivity, and limited awareness are contributing to worsening health outcomes in these regions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Many residents must travel hours to the nearest clinic, and often rely on unverified sources or ignore symptoms due to cost or access issues. This healthcare divide needs a scalable, affordable, and accessible tech solution.
              </p>
              <a
                href="#solution"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                See our solution <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
                alt="Rural healthcare challenges"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="text-4xl font-bold text-red-500 mb-2">60%</div>
                <p className="text-gray-600">of rural population lacks access to proper healthcare facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;