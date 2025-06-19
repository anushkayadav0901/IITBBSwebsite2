import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Scene from "@/components/About/Particles/Particles";

const About = () => {
  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden relative">
     <Navbar />
      <Scene/>
      <ScrollText />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl text-center px-4">
        <h1 className="text-5xl font-bold mb-6">About IIT Bhubaneswar Hostel</h1>
        <p className="text-lg mb-4">IIT Bhubaneswar Hostel is dedicated to providing a safe, comfortable, and vibrant living environment for students. Our hostels are equipped with modern amenities, fostering a sense of community, academic excellence, and personal growth. We believe in holistic development, offering opportunities for sports, cultural activities, and leadership. Our mission is to make every resident feel at home and empowered to achieve their best.</p>
        <p className="text-lg">Join us and experience a unique blend of tradition, innovation, and camaraderie at IIT Bhubaneswar Hostel.</p>
      </div>
      <div className="absolute lg:text-[17rem] text-7xl font-extrabold tracking-widest bottom-0 right-1/2 translate-x-1/2 w-auto leading-none">SMATIK</div>
    </div>
  );
};

export default About;

const ScrollText = (props) => {
  return (
    <div className="w-full flex items-center justify-between font-bold lg:text-3xl text-xl text-white absolute lg:top-1/2 top-2/3 lg:px-20" {...props}>
      <div>+</div>
      <div>+</div>
      <div>Scroll to Explore</div>
      <div>+</div>
      <div>+</div>
    </div>
  );
};
