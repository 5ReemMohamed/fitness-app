"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-20">
        
        <motion.div
          className="flex flex-col justify-center order-2 lg:order-1 p-5 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
        >
          <p className="text-[#ff5e18] text-4xl font-semibold">Since - 1998</p>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl max-w-[100%] lg:max-w-[87%] capitalize font-bold mb-6">
            make your body shape
          </h1>
          <p className="text-white/80 tracking-wide">
            Discover the secrets behind healthy living being easy & enjoyable
          </p>
        </motion.div>

       
        <div className="relative order-1 lg:order-2 lg:border-l-4 border-l-[#ff5e18] min-h-[90vh]">
          <Image
            src="/header.png"
            alt="Hero image"
            fill
            priority
            className="object-cover object-[50%_10%]"
          />
        </div>
      </div>
    </header>
  );
}
