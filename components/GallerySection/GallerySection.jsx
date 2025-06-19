import React from "react";

const images = [
  "/textures/planet_1.jpg",
  "/textures/planet_2.jpg",
  "/textures/planet_3.jpg",
  "/textures/planet_4.jpg",
  "/textures/planet_5.jpg",
  "/textures/planet_6.jpg",
  "/textures/planet_7.jpg",
  "/textures/planet_8.jpg",
  "/textures/planet_9.jpg",
];

const GallerySection = () => (
  <section className="py-16 bg-gray-50 text-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Hostel Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow">
            <img src={src} alt={`Hostel life ${idx + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection; 