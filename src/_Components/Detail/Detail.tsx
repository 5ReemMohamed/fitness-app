"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ExerciseDetail } from "@/Interfaces/Exercises";

type Props = {
  exerciseDetail: ExerciseDetail;
};


const Detail = ({ exerciseDetail }: Props) => {
  const {
    gifUrl,
    name,
    target,
    equipment,
    bodyPart,
    secondaryMuscles,
    instructions,
  } = exerciseDetail;
  

  return (
    <div>
      <div className="px-4 pt-6">
        <Link
          href="/exercises"
          className="inline-block text-[#ff5e18] font-semibold border border-[#ff5e18] px-4 py-2 rounded-lg hover:bg-[#ff5e18] hover:text-white transition"
        >
          ← Back to Exercises
        </Link>
      </div>

      <motion.h2
        className="text-white text-3xl font-bold mb-6 capitalize text-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {name}
      </motion.h2>

      <div className="exercise-detail px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          className="mb-6 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={gifUrl}
            alt={name}
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="text-white space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="capitalize">
            <span className="font-semibold text-[#ff5e18] text-xl">Target :</span> {target}
          </p>
          <p className="capitalize">
            <span className="font-semibold text-[#ff5e18] text-xl">Body Part :</span> {bodyPart}
          </p>
          <p className="capitalize">
            <span className="font-semibold text-[#ff5e18] text-xl">Equipment :</span> {equipment}
          </p>

          {secondaryMuscles?.length > 0 && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-[#ff5e18] text-xl">Secondary Muscles :</h3>
              <ul className="list-disc list-inside">
                {secondaryMuscles.map((muscle, index) => (
                  <li key={index}>{muscle}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {instructions?.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-[#ff5e18] text-xl">Instructions :</h3>
              <ol className="list-decimal list-inside space-y-1">
                {instructions.map((step, index) => (
                  <li className="mb-4 leading-6" key={index}>{step}</li>
                ))}
              </ol>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Detail;
