import React from 'react';

const TherapistProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Dr. Emily Thompson" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Licensed Clinical Psychologist</div>
            <h2 className="mt-1 text-3xl font-bold leading-tight text-gray-900">Dr. Emily Thompson</h2>
            <p className="mt-2 text-gray-600">Dr. Emily Thompson has over 15 years of experience in clinical psychology, specializing in cognitive behavioral therapy and mindfulness practices. She is dedicated to helping clients achieve personal growth and emotional well-being through a compassionate and tailored approach.</p>
          </div>
        </div>
        <div className="px-8 py-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-600">Email: emily.thompson@example.com</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Availability</h3>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-red-500 mr-4"></div>
                <div className="flex-1">
                  <div className="h-4 bg-red-200 rounded-full mb-2"></div>
                  <div className="h-4 bg-red-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Reviews</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">"Dr. Thompson has been instrumental in helping me manage my anxiety. Her techniques are practical and effective." - Sarah J.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">"A truly empathetic therapist who listens and provides insightful feedback." - Michael B.</p>
            </div>
          </div>
        </div>
        <div className="px-8 py-6">
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;