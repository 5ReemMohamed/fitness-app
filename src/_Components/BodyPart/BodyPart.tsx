import React from "react";

type Props = {
  item: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

export default function BodyPart({ item, bodyPart, setBodyPart }: Props) {
  const isActive = bodyPart === item;

  return (
    <button
    onClick={() => setBodyPart(item)}
    className={`cursor-pointer px-6 py-2 rounded-full capitalize border-2 font-bold tracking-wider ${
      isActive
        ? "bg-[#A33100] text-white border-[#A33100]" 
        : "bg-[#2a2a2a] text-white border-[#A33100] hover:bg-[#3a3a3a]" 
    } transition duration-200`}
  >
    {item}
  </button>
  
  
  );
}
