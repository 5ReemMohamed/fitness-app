"use client";
import Detail from "@/_Components/Detail/Detail";
import ExerciseVideos from "../ExerciseVideos/ExerciseVideos";
import React, { useEffect, useState } from "react";
import SimilarExercises from "../SimilarExercises/SimilarExercises";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ExerciseDetail } from "@/Interfaces/Exercises";
import { fetchData, options, youtubeOptions } from "@/utilities/fetchData";

export default function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseDetail | null>(null);
  const [exerciseVideos, setExerciseVideos] = useState<[]>([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState<[]>([]);
  const [equipmentExercise, setEquipmentExercise] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!id) return;
  
    const fetchExerciseData = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const cachedDetail = localStorage.getItem(`exercise-detail-${id}`);
        const cachedVideos = localStorage.getItem(`exercise-videos-${id}`);
        const cachedMuscleExercise = localStorage.getItem(`exercise-muscle-${id}`);
        const cachedEquipmentExercise = localStorage.getItem(`exercise-equipment-${id}`);
  
        if (cachedDetail && cachedVideos && cachedMuscleExercise && cachedEquipmentExercise) {
          setExerciseDetail(JSON.parse(cachedDetail));
          setExerciseVideos(JSON.parse(cachedVideos));
          setTargetMuscleExercise(JSON.parse(cachedMuscleExercise));
          setEquipmentExercise(JSON.parse(cachedEquipmentExercise));
          setLoading(false);
          return;
        }
  
        const exerciseDUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
  
        const exerciseDetailData = await fetchData(
          `${exerciseDUrl}/exercises/exercise/${id}`,
          options
        );
  
        const exerciseVideoData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData?.name}`,
          youtubeOptions
        );
  
        const targetMuscleExerciseData = await fetchData(
          `${exerciseDUrl}/exercises/target/${exerciseDetailData.target}`,
          options
        );
  
        const equipmentExerciseData = await fetchData(
          `${exerciseDUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          options
        );
  
        setExerciseDetail(exerciseDetailData);
        setExerciseVideos(exerciseVideoData.contents);
        setTargetMuscleExercise(targetMuscleExerciseData);
        setEquipmentExercise(equipmentExerciseData);
  
       
        localStorage.setItem(`exercise-detail-${id}`, JSON.stringify(exerciseDetailData));
        localStorage.setItem(`exercise-videos-${id}`, JSON.stringify(exerciseVideoData.contents));
        localStorage.setItem(`exercise-muscle-${id}`, JSON.stringify(targetMuscleExerciseData));
        localStorage.setItem(`exercise-equipment-${id}`, JSON.stringify(equipmentExerciseData));
      } catch (err) {
        console.error("Error fetching exercise data:", err);
        setError("Failed to load exercise details.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchExerciseData();
  }, [id]);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-[#ff5e18] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !exerciseDetail) {
    return <p className="text-red-500 text-center py-10">{error ?? "Something went wrong."}</p>;
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Detail exerciseDetail={exerciseDetail} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      </motion.div>

      <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise}/>
    </div>
  );
}
