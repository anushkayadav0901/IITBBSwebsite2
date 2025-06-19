import React from "react";

const MessSection = () => (
  <section className="py-16 bg-gray-50 text-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Mess & Dining</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Nutritious Menu</h3>
          <p>Balanced and diverse meals served daily, with vegetarian and non-vegetarian options available.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Hygiene & Cleanliness</h3>
          <p>Strict hygiene standards and regular inspections ensure a clean and safe dining environment.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Special Food Events</h3>
          <p>Festive menus and themed food nights celebrate cultural diversity and special occasions.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-2">Student Feedback</h3>
          <p>Regular feedback is collected from students to improve food quality and menu variety.</p>
        </div>
      </div>
    </div>
  </section>
);

export default MessSection; 