export interface Exercise {
    gifUrl: string;
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    id: string | number
   
  }

  export type Video = {
    video: {
      videoId: string;
      title: string;
      thumbnails: { url: string }[];
      channelName: string;
    };
  };

  export type ExerciseDetail = {
    id: string | number;
    gifUrl: string;
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    secondaryMuscles: string[];
    instructions: string[];
  };

 