import ExerciseCard from "../ExerciseCard/ExerciseCard";
import React from "react";
import { motion } from "framer-motion";
import { Exercise } from "@/Interfaces/Exercises";

type Props = {
  exercises: Exercise[];
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
  bodyPart: string;
  loading: boolean;
};

export default function Exercises({ exercises, setExercises, bodyPart, loading }: Props) {
  return (
    <div className="flex flex-col gap-3 items-center p-8">
      <div className="grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          <div className="col-span-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ff5e18]"></div>
          </div>
        ) : exercises.length > 0 ? (
          exercises.map((exercise) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ExerciseCard exercise={exercise} />
            </motion.div>
          ))
        ) : (
          <p>No exercises found for {bodyPart}</p>
        )}
      </div>
    </div>
  );
}
