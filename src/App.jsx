import { useRef, useState, useEffect } from "react";
import Home from "./components/pages/Home";
import { useGesture } from "@use-gesture/react";
import { Project } from "./components/pages/Project";
import { NavBar } from "./components/navbar";
import { Contact } from "./components/pages/Contact";

const App = () => {
  const [page, setPage] = useState("home");
  const [index, setIndex] = useState(0);
  const isScrollingAllowed = useRef(true);
  const data = ["home", "project", "contact"];

  useEffect(() => {
    setPage(data[index]);
  }, [index]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <Home
            handlePause={handlePause}
            title={selectedMusic.title}
            artist={selectedMusic.artist}
            prev={handlePrev}
            next={handleNext}
            isPlaying={isPlaying}
            time={(currentTime / duration) * 100}
            handleSliderChange={handleSliderChange}
          />
        );
      case "project":
        return <Project />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handleClick = (e) => {
    const newPage = e.target.getAttribute("data-value");
    setIndex(data.indexOf(newPage));
  };

  const handleGesture = (state) => {
    if (!isScrollingAllowed.current) return;
    const isScrollingDown = state.movement[1] > 0;

    setIndex((prevIndex) =>
      isScrollingDown
        ? Math.min(prevIndex + 1, data.length - 1)
        : Math.max(prevIndex - 1, 0),
    );

    isScrollingAllowed.current = false;
    setTimeout(() => {
      isScrollingAllowed.current = true;
    }, 400);
  };

  const bind = useGesture({
    onWheel: handleGesture,
    onScroll: handleGesture,
    onDrag: handleGesture,
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [musicIndex, setMusicIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const song = [
    { title: "Color Your Night", artist: "-", url: "/song1.mp3" },
    { title: "3:12", artist: "Suisei", url: "/song2.mp3" },
  ];

  const selectedMusic = song[musicIndex];
  const music = useRef(new Audio());

  useEffect(() => {
    music.current.src = selectedMusic.url;
    music.current.play();
    setIsPlaying(true);

    const handleLoadedMetadata = () => {
      setDuration(music.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(music.current.currentTime);
    };

    music.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    music.current.addEventListener("timeupdate", handleTimeUpdate);

    const handleEnded = () => {
      setMusicIndex((prevIndex) => (prevIndex + 1) % song.length);
    };
    music.current.addEventListener("ended", handleEnded);

    return () => {
      music.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
      music.current.removeEventListener("timeupdate", handleTimeUpdate);
      music.current.removeEventListener("ended", handleEnded);
    };
  }, [musicIndex, selectedMusic.url, song.length]);

  const handleNext = () => {
    setMusicIndex((prevIndex) => (prevIndex + 1) % song.length);
  };

  const handlePrev = () => {
    setMusicIndex((prevIndex) => (prevIndex - 1 + song.length) % song.length);
  };

  const handlePause = () => {
    if (isPlaying) {
      music.current.pause();
    } else {
      music.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value) => {
    const newTime = (value[0] / 100) * duration;
    music.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="w-full h-screen overflow-hidden" {...bind()}>
      <NavBar onClick={handleClick} display={data[index]} />
      <div>{renderPage()}</div>
    </div>
  );
};

export default App;
