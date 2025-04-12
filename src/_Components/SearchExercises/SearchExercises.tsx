"use client";
import React, { useEffect, useState } from "react";
import ScrollBar from "../ScrollBar/ScrollBar";
import { Exercise } from "@/Interfaces/Exercises";
import { fetchData, options } from "@/utilities/fetchData";

type Props = {
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchExercises({ bodyPart, setBodyPart }: Props) {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBodyParts = async () => {
      setLoading(true);
      setError(null);

     
      const cached = localStorage.getItem("bodyParts");

      if (cached) {
        setBodyParts(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          options
        );

        if (Array.isArray(data)) {
          const fullList = ["all", ...data];
          setBodyParts(fullList);
          localStorage.setItem("bodyParts", JSON.stringify(fullList)); 
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching body parts:", err);
        setError("Failed to load body parts.");
      } finally {
        setLoading(false);
      }
    };

    fetchBodyParts();
  }, []);

  return (
    <>
      {loading && <p className="text-white text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mt-4">
        {bodyParts.length > 0 && (
          <ScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
        )}
      </div>
    </>
  );
}
