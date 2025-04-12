import BodyPart from "../BodyPart/BodyPart";
import React from "react";

type Props = {
  data:string[];
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
};

export default function ScrollBar({ data, bodyPart, setBodyPart }: Props) {
  return (
    <div className="w-full my-20">
        <div className="flex flex-wrap justify-center gap-3 text-[#ff5e18]">
          {data.map((item) => (
            <div key={item} className="flex-shrink-0">
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </div>
          ))}
        </div>

    </div>
  );
}
