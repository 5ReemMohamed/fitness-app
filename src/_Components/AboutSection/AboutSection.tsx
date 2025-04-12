"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  useEffect(()=> {
    document.title="About Us"
    window.scrollTo(0,0);
  },[])
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-16"
      >
        <div className="relative">
          
          <img
            src="/about-us.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-3xl transition-all duration-500 ease-in-out shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ff5e18]/50 to-transparent opacity-40 rounded-3xl"></div>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-[#ff5e18] mb-6">About Us</h2>
          <p className="text-lg text-white/70 mb-8">
            Welcome to our fitness platform! We are dedicated to providing you with the best workout
            routines, instructional videos, and tips to help you achieve your fitness goals.
          </p>
          <p className="text-lg text-white/70 mb-8">
            Our mission is to empower individuals through exercise by offering a variety of exercise
            programs tailored to different fitness levels and preferences.
          </p>
          <p className="text-lg text-white/70">
            Our team consists of fitness professionals, trainers, and enthusiasts who believe in the
            power of a healthy lifestyle. Together, we strive to inspire and motivate you to take
            charge of your fitness journey.
          </p>
        </div>
      </motion.div>

      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-[#ff5e18] mb-8">Meet Our Team</h2>
        <div className="flex justify-center gap-12 flex-wrap">
          
          <div className="flex flex-col items-center mb-8">
            <img
              src="/instructor2.jpg" 
              alt="Team Member 2"
              className="w-50 h-50 rounded-full mb-6 object-cover object-[40%_10%]"
            />
            <p className="font-semibold text-xl text-white mb-1 tracking-wider">Jane Smith</p>
            <p className="text-sm text-white/50">Nutritionist</p>
          </div>

         
          <div className="flex flex-col items-center mb-8">
            <img
              src="/instructor1.jpg" 
              alt="Team Member 1"
              className="w-50 h-50 rounded-full mb-6 object-cover object-[100%_0%]"
            />
            <p className="font-semibold text-xl text-white mb-1 tracking-wider">John Doe</p>
            <p className="text-sm text-white/50">Fitness Coach</p>
          </div>

          
          <div className="flex flex-col items-center mb-8">
            <img
              src="/instructor3.jpg" 
              alt="Team Member 3"
              className="w-50 h-50 rounded-full mb-6 object-cover"
            />
            <p className="font-semibold text-xl text-white mb-1 tracking-wider">Alice Johnson</p>
            <p className="text-sm text-white/50">Yoga Instructor</p>
          </div>

         
          <div className="flex flex-col items-center mb-8">
            <img
              src="/instructor5.jpg" 
              alt="Team Member 4"
              className="w-50 h-50 rounded-full mb-6 object-cover"
            />
            <p className="font-semibold text-xl text-white mb-1 tracking-wider">Michael Brown</p>
            <p className="text-sm text-white/50">Physical Therapist</p>
          </div>

         
          <div className="flex flex-col items-center mb-8">
            <img
              src="/instructor4.jpg" 
              alt="Team Member 5"
              className="w-50 h-50 rounded-full mb-6 object-cover object-[40%_10%]"
            />
            <p className="font-semibold text-xl text-white mb-1 tracking-wider">Sophia Lee</p>
            <p className="text-sm text-white/50">Pilates Instructor</p>
          </div>

      
          <div className="flex flex-col items-center mb-8">
            <img
              src="/instruction6.jpg" 
              alt="Team Member 6"
              className="w-50 h-50 rounded-full mb-6 object-cover"
            />
            <p className="font-semibold text-xl text-white mb-1 tracking-wider">David Green</p>
            <p className="text-sm text-white/50">Strength Coach</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
