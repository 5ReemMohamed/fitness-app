"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Exercise } from "@/Interfaces/Exercises";

type Props = {
  data: Exercise[];
};

export default function ExerciseScrollBar({ data }: Props) {
  const [imageError, setImageError] = useState(false);
  
  const fallbackImage = "/error.jpg"; 

  const handleImageError = () => {
    setImageError(true); 
  };
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.slice(0, 4).map((item, index) => (
          <Link
            key={item.id}
            href={`/exerciseDetails/${item.id}`} 
          >
            <motion.div
              className="bg-white/10 rounded-xl shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={imageError ? fallbackImage : item.gifUrl}
                alt={item.name}
                className="w-full object-cover rounded-t-xl"
                onError={handleImageError}
              />
              <div className="p-7">
                <h3 className="mt-3 text-white font-semibold capitalize mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-300 capitalize mb-1">
                  <span className="text-[#ff5e18] font-bold">Body Part :</span> {item.bodyPart}
                </p>
                <p className="text-sm text-gray-300 capitalize mb-1">
                  <span className="text-[#ff5e18] font-bold">Target :</span> {item.target}
                </p>
                <p className="text-sm text-gray-300 capitalize">
                  <span className="text-[#ff5e18] font-bold">Equipment :</span> {item.equipment}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
