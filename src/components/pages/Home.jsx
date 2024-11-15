// Home.js
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Clock } from "../Clock";
import { Button } from "../ui/button";
import { MusicPlayer } from "../MusicPlayer";

function Home({
  handlePause,
  title,
  artist,
  prev,
  next,
  isPlaying,
  time,
  handleSliderChange,
}) {
  return (
    <div className="w-full h-screen mx-auto lg:grid grid-cols-4 gap-2 p-2">
      <div className="w-full h-full col-span-3 bg-[url('/anime.jpg')] bg-center bg-cover rounded-xl flex lg:justify-end flex-col p-2">
        <Clock className={"lg:hidden"} />
        <div className="w-56 md:w-72 bg-[#0c0f11] text-[#41719E] rounded-xl p-3 gap-3 flex flex-col justify-center items-center ml-3 m">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl">ARYA</h1>
            <p className="md:text-3xl">WIJAYA KUSUMAH</p>
          </div>

          <div className="flex gap-3">
            <Button>View</Button>
            <Button className="text-md">
              <InstagramLogoIcon className="h-full w-full" />
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-3">
        <MusicPlayer
          handlePause={handlePause}
          title={title}
          artist={artist}
          next={next}
          prev={prev}
          isPlaying={isPlaying}
          handleSliderChange={handleSliderChange}
          time={time}
        />
        <Clock />
      </div>
    </div>
  );
}

export default Home;
