import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Therapist {
  id: number;
  name: string;
  specialization: string;
  location: string;
  imageUrl: string;
}

const therapists: Therapist[] = [
  { id: 1, name: 'Dr. Emily Johnson', specialization: 'Child Therapy', location: 'Los Angeles, CA', imageUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Mr. James Smith', specialization: 'Family Therapy', location: 'New York, NY', imageUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Ms. Sarah Lee', specialization: 'Cognitive Behavioral Therapy', location: 'Chicago, IL', imageUrl: 'https://i.pravatar.cc/150?img=3' },
];

const TherapistList: React.FC = () => {
  const [location, setLocation] = useState('');
  const [specialization, setSpecialization] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching with:', { location, specialization });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">TherapistFinder</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                id="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
              <select
                id="specialization"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              >
                <option value="">All Specializations</option>
                <option value="child-therapy">Child Therapy</option>
                <option value="family-therapy">Family Therapy</option>
                <option value="cognitive-behavioral-therapy">Cognitive Behavioral Therapy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="availableNow"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="availableNow" className="ml-2 block text-sm text-gray-900">
                  Available Now
                </label>
              </div>
            </div>
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapists.map((therapist) => (
            <div key={therapist.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={therapist.imageUrl} alt={therapist.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{therapist.name}</h3>
                <p className="text-gray-600 mb-2">{therapist.specialization}</p>
                <p className="text-gray-600 mb-4">{therapist.location}</p>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TherapistList;