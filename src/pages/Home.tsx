import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Moon, Heart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Improve your mental well-being with</h1>
            <img src="/logo.png" alt="MentalNow Logo" className="mx-auto mb-8" />
            <Link to="/signup" className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800">
              Sign up for free
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <UserPlus size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Happy mind, happy life</h3>
                <p>Find inner peace and live a happier life.</p>
              </div>
              <div className="text-center">
                <Moon size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Better sleep for better days</h3>
                <p>Get a better night's sleep and wake up refreshed and ready to tackle the day.</p>
              </div>
              <div className="text-center">
                <Heart size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Reduce stress and anxiety</h3>
                <p>Find peace of mind and live a happier life.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Join the MindWell community and connect with others</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'John D.', role: 'CEO of Company', quote: 'MindWell helped me find the perfect psychologist.' },
                { name: 'Sarah M.', role: 'Yoga Instructor', quote: 'MindWell changed my life. Highly recommended!' },
                { name: 'Chris H.', role: 'Student', quote: 'Meditation is my medication' },
                { name: 'Alex T.', role: 'Project Manager', quote: 'MindWell helped me overcome my anxiety and stress.' }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt={testimonial.name} className="rounded-full mr-3" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;