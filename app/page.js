"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";

// Regular imports for components that don't use browser APIs
import Header from "@/components/Featured/Header";
import Skiggle from "@/components/Featured/Skiggle";
import SubHeader from "@/components/Featured/SubHeader";
import Description from "@/components/Navbar/Description";
import Navbar from "@/components/Navbar/Navbar";
import ScrollText from "@/components/Navbar/ScrollText";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Connection from "@/components/ConnectingSection/Connection";
import FacilitiesSection from "@/components/FacilitiesSection/FacilitiesSection";
import RoomsSection from "@/components/RoomsSection/RoomsSection";
import MessSection from "@/components/MessSection/MessSection";
import ActivitiesSection from "@/components/ActivitiesSection/ActivitiesSection";
import GallerySection from "@/components/GallerySection/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

// Dynamic imports for components that might use browser APIs
const Footer = dynamic(
  () => import("@/components/Character/Experience"),
  { ssr: false }
);

const FeaturedVideo = dynamic(
  () => import("@/components/Featured/FeaturedVideo"),
  { ssr: false }
);

const Scene = dynamic(
  () => import("@/components/Pipes/CrossPipes").then(mod => ({ default: mod.Scene })),
  { ssr: false }
);

const Experience = dynamic(
  () => import("@/components/Experience/Experience"),
  { ssr: false }
);

const Planets = dynamic(
  () => import("@/components/Pipes/Planets").then(mod => ({ default: mod.Planets })),
  { ssr: false }
);

export default function Home() {
  const ref = useRef(null);
  return (
    <div className="bg-[#F0F1FA] h-auto w-screen font-[#060607] flex flex-col px-6 lg:px-20 overflow-hidden pt-24 lg:pt-32">
      <Navbar />
      <div className="h-screen flex flex-col pb-6 ">
        <Description />
        {/* <div className="h-full bg-brblue rounded-3xl"></div> */}
        {/* <Scene className="rounded-xl lg:rounded-3xl" /> */}
        <Planets className="h-full rounded-xl lg:rounded-3xl" />
        <ScrollText />
      </div>
      <div className="h-[200vh] relative mt-[20rem]" ref={ref}>
        <Skiggle />
        <Header />
        <SubHeader />
        <FeaturedVideo refForward={ref} />
      </div>
      <FeaturedWork />
      <Connection className="" />
      <div className="mt-80 w-full h-screen relative">
        <Experience className="w-full h-full rounded-3xl" />
      </div>
      <div className="relative">
        <div className="absolute text-9xl font-bold text-center w-full h-full top-80">
          HIRE       ME
        </div>
        <Footer />
        <div className="absolute text-3xl font-bold text-center w-full h-full top-[40rem]">
          made by anushka
        </div>
      </div>
      {/* Hostel Sections */}
      <FacilitiesSection />
      <RoomsSection />
      <MessSection />
      <ActivitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
