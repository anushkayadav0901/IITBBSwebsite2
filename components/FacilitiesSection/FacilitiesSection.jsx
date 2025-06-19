import React from "react";

const FacilitiesSection = () => (
  <section className="py-16 bg-gray-50 text-gray-900">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Hostel Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Modern Rooms</h3>
          <p>Spacious, well-ventilated rooms with comfortable beds, study tables, and ample storage.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Study Areas</h3>
          <p>Quiet study rooms and group discussion spaces available 24/7 for academic excellence.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Sports & Fitness</h3>
          <p>Access to sports complexes, gymnasiums, and open grounds for a healthy lifestyle.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Mess & Dining</h3>
          <p>Nutritious and diverse menu served in a hygienic mess with special festival menus.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Wi-Fi & Connectivity</h3>
          <p>High-speed internet and seamless connectivity throughout the hostel premises.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Laundry & Housekeeping</h3>
          <p>Regular laundry and housekeeping services for a clean and comfortable stay.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">24x7 Security</h3>
          <p>Round-the-clock security and surveillance ensuring student safety and peace of mind.</p>
        </div>
      </div>
    </div>
  </section>
);

export default FacilitiesSection; 