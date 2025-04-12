"use client";
import React from "react";
import { motion } from "framer-motion";
import { Video } from "@/Interfaces/Exercises";

type Props = {
  exerciseVideos: Video[];
  name: string;
};

export default function ExerciseVideos({ exerciseVideos, name }: Props) {
  return (
    <div className="px-4 py-8">
      <h3 className="text-white text-2xl font-bold mb-6 text-center capitalize">
        Watch <span className="text-[#ff5e18] italic">{name}</span> exercise videos
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {exerciseVideos.slice(0, 4).map((item, index) => (
          <motion.a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="block bg-white/10 p-3 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-2 text-white font-semibold text-sm">
              {item.video.title}
            </p>
            <p className="text-gray-400 text-xs">
              Channel: {item.video.channelName}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
