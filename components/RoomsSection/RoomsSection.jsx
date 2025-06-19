import React from "react";

const RoomsSection = () => (
  <section className="py-16 bg-white text-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Rooms & Accommodation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Single & Double Rooms</h3>
          <p>Options for single and double occupancy rooms, each equipped with comfortable beds, study desks, and storage.</p>
        </div>
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Room Allocation</h3>
          <p>Rooms are allocated based on merit and availability, ensuring a fair and transparent process for all students.</p>
        </div>
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Amenities</h3>
          <p>Each room is provided with a fan, lights, study table, chair, and wardrobe. Air-conditioned rooms are available in select hostels.</p>
        </div>
        <div className="bg-gray-100 rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Maintenance</h3>
          <p>Regular maintenance and prompt support ensure a comfortable and hassle-free stay for all residents.</p>
        </div>
      </div>
    </div>
  </section>
);

export default RoomsSection; 