import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  exercise: {
    gifUrl: string;
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    id: string | number;
  };
};

export default function ExerciseCard({ exercise }: Props) {
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "/error.jpg"; 

  const handleImageError = () => {
    setImageError(true); 
  };

  return (
    <Link href={`/exerciseDetails/${exercise.id}`} className="block">
      <div className="exercise-card flex flex-col w-full h-[550px] overflow-hidden rounded-[6px] bg-[#323636] text-white transition hover:scale-[1.01] duration-300 ease-in-out shadow-md">
        <div className="relative w-full h-[350px]">
          <Image
            src={imageError ? fallbackImage : exercise.gifUrl}
            alt={exercise.name}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={handleImageError} 
          />
        </div>

        <div className="py-6 px-4 flex flex-col justify-between flex-1">
          <h3 className="text-lg font-bold capitalize tracking-wide mb-3">{exercise.name}</h3>

          <div className="flex gap-4 mb-4 items-center">
            <p className="bg-[#ff5e18] px-3 py-2 rounded-full capitalize text-sm">{exercise.target}</p>
            <p className="border border-[#ff5e18] px-5 py-1.5 rounded-full capitalize text-sm">{exercise.bodyPart}</p>
          </div>

          <p className="capitalize text-sm tracking-wide text-gray-300">{exercise.equipment}</p>
        </div>
      </div>
    </Link>
  );
}
