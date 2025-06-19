import React from "react";

const ContactSection = () => (
  <section className="py-16 bg-gray-50 text-gray-900">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <form className="bg-white rounded-xl shadow p-8 mb-8">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
      </form>
      <div className="text-center">
        <div className="mb-2 font-semibold">Hostel Office</div>
        <div>Email: hosteloffice@iitbbs.ac.in</div>
        <div>Phone: +91-674-713-5000</div>
        <div>Address: IIT Bhubaneswar, Argul, Jatni, Khordha, Odisha 752050</div>
      </div>
    </div>
  </section>
);

export default ContactSection; 