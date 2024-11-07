import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { PauseIcon, PlayIcon } from "lucide-react";

export const MusicPlayer = ({
  handlePause,
  title,
  artist,
  prev,
  next,
  isPlaying,
  handleSliderChange,
  time,
}) => {
  return (
    <div className="bg-[#0c0f11] text-[#41719E] h-full rounded-3xl flex flex-col items-center p-3 gap-3">
      <h2 className="text-2xl font-bold">Listen & Chill</h2>
      <div className="bg-sky-799 pointer w-2/3" onClick={handlePause}>
        <img src="/lofi.jpeg" alt="" className="object-fill h-full" />
      </div>
      <div className="flex flex-col gap-1 items-center justify-center text-center w-full p-2">
        <h2>{title}</h2>
        <h2>{artist}</h2>
        <Slider value={[time]} onValueChange={handleSliderChange} max={100} />
        <div className="flex gap-2">
          <Button onClick={prev}>Prev</Button>
          <Button onClick={handlePause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </Button>
          <Button onClick={next}>Next</Button>
        </div>
      </div>
    </div>
  );
};
