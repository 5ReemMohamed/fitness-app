import ExerciseScrollBar from "../ExerciseScrollBar/ExerciseScrollBar";
import React from "react";
import { Exercise } from "@/Interfaces/Exercises";

type Props = {
  targetMuscleExercise: Exercise[];
  equipmentExercise: Exercise[];
};

export default function SimilarExercises({ targetMuscleExercise, equipmentExercise }: Props) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-white text-center">
        <span className="text-[#ff5e18] italic">Target Muscle</span> Exercises
      </h2>
      {targetMuscleExercise.length ? (
        <ExerciseScrollBar data={targetMuscleExercise} />
      ) : (
        <div className="flex justify-center items-center h-24">
          <div className="w-10 h-10 border-4 border-[#ff5e18] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mt-32 text-white text-center">
        <span className="text-[#ff5e18] italic">Equipment-Based</span> Exercises
      </h2>
      {equipmentExercise.length ? (
        <ExerciseScrollBar data={equipmentExercise} />
      ) : (
        <div className="flex justify-center items-center h-24">
          <div className="w-10 h-10 border-4 border-[#ff5e18] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
