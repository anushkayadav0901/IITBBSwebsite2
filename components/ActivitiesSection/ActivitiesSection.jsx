import React from "react";

const ActivitiesSection = () => (
  <section className="py-16 bg-white text-gray-900">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Clubs & Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Student Clubs</h3>
          <p>Join a variety of clubs, from coding and robotics to music, dance, and drama. Explore your interests and talents!</p>
        </div>
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Sports & Fitness</h3>
          <p>Participate in inter-hostel tournaments, use the gym, or play your favorite sport on our well-maintained grounds.</p>
        </div>
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Cultural Events</h3>
          <p>Annual hostel fests, cultural nights, and celebrations bring students together for fun and learning.</p>
        </div>
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Workshops & Seminars</h3>
          <p>Regular workshops and seminars help students develop new skills and broaden their horizons.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ActivitiesSection; 