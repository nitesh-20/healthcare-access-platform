import React from 'react';
import { ArrowRight, Activity, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-teal-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800">
              <span className="text-sm font-semibold">Healthcare Hackathon 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Bridging the Gap in
              <span className="text-teal-600"> Healthcare Access</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              Empowering underserved communities with accessible healthcare solutions through innovative technology and community engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solution"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
              >
                Explore Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-teal-600 text-base font-medium rounded-lg text-teal-600 hover:bg-teal-50 transition-colors duration-300"
              >
                View Demo
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
                  <Activity className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">60%</h3>
                <p className="text-gray-600">Rural Areas Covered</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
                <p className="text-gray-600">Users Helped</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-600">Support Access</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
              alt="Healthcare professionals using digital technology"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <blockquote className="text-gray-700 italic">
                "Healthcare is a fundamental human right, not a privilege."
              </blockquote>
              <p className="text-gray-500 text-sm mt-2">- World Health Organization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;