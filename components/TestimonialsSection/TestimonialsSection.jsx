import React from "react";

const testimonials = [
  {
    name: "Priya S.",
    text: "Staying at IIT Bhubaneswar Hostel has been a wonderful experience. The facilities are top-notch and the community is very supportive!",
  },
  {
    name: "Rahul K.",
    text: "I made lifelong friends and enjoyed every moment, from late-night study sessions to hostel fests!",
  },
  {
    name: "Ananya M.",
    text: "The mess food is great and the rooms are always clean. I feel safe and at home here.",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 bg-white text-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl shadow p-6">
            <p className="text-lg italic mb-4">"{t.text}"</p>
            <div className="text-right font-semibold">- {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 