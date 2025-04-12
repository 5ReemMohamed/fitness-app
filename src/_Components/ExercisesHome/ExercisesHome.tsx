"use client";
import Exercises from "../Exercises/Exercises";
import React, { useEffect, useState } from "react";
import SearchExercises from "../SearchExercises/SearchExercises";
import { Exercise } from "@/Interfaces/Exercises";
import { fetchData, options } from "@/utilities/fetchData";

export default function ExercisesHome() {
  const [bodyPart, setBodyPart] = useState<string>("all");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 

  const validBodyParts = [
    "back", "cardio", "chest", "lower arms", "lower legs", "neck",
    "shoulders", "upper arms", "upper legs", "waist"
  ];

  useEffect(() => {
     document.title="Exercises";
    const fetchExercisesData = async () => {
      setLoading(true);
      try {
        let bodyPartToFetch = bodyPart;
  
        if (bodyPart === "all") {
          bodyPartToFetch = "back"; 
        }
  
        if (!validBodyParts.includes(bodyPartToFetch)) {
          console.error("Invalid body part:", bodyPartToFetch);
          return;
        }
  
        const cacheKey = `exercises-${bodyPartToFetch}`;
        const cachedData = localStorage.getItem(cacheKey);
  
        if (cachedData) {
          setExercises(JSON.parse(cachedData));
          return;
        }
  
        const exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPartToFetch}`,
          options
        );
  
        setExercises(exercisesData);
        localStorage.setItem(cacheKey, JSON.stringify(exercisesData));
  
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchExercisesData();
  }, [bodyPart]);
  

  return (
    <div className="exercises">
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
     
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} loading={loading} />
    </div>
  );
}
