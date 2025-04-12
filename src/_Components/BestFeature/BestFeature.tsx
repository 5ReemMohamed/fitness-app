"use client";
import Image from "next/image";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { Feature } from "@/Interfaces/Features";

export default memo(function BestFeature() {
  const features: Feature[] = [
    {
      id: 1,
      img:"/services1.png",
      title:"Member Only Events"
    },
    {
      id: 2,
      img:"/services2.png",
      title:"Personal Training"
    },
    {
      id: 3,
      img:"/services3.png",
      title:"Strength Training"
    },
    {
      id: 4,
      img:"/services4.jpg",
      title:"CrossFit Group Classes"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="heading mb-9">
        <p className="text-[#ff5e18] text-2xl font-semibold text-center capitalize mb-1">Our best features</p>
        <h2 className="text-white text-center text-5xl font-semibold uppercase tracking-wider">Why choose us ?</h2>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => (
      <motion.div
      key={feature.id}
      className="flex flex-col gap-3 rounded-[6px] bg-[#323636] text-white text-center hover:cursor-pointer hover:-translate-y-2.5 transition-all duration-500"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative">
      <Image
    src={feature.img}
    alt="service1"
    width={300}  
    height={400} 
    className="w-full h-[400px] object-cover rounded-[6px]"
  />
        
        <div className="absolute inset-0 flex justify-center items-center bg-[#ff5e18]/25 rounded-[6px] text-white">
          <p className="text-4xl font-bold max-w-72">{feature.title}</p>
        </div>
      </div>
    </motion.div>
        ))}
      </div>
    </div>
  );
});
