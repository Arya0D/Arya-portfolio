import { cn } from "../../lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";

export const Project = () => {
  const data = [
    {
      title: "To Do List",
      desc: "Todo list app built using React.js and a framework",
      img: "/project1.png",
      link: {
        repo: "https://github.com/Arya0D/Todo-List",
        view: "https://todo-list-six-roan.vercel.app/",
      },
    },
    {
      title: "Test Project",
      desc: "Sample description text for test project.",
      img: "",
      link: {
        repo: "/a",
        view: "/",
      },
    },
    {
      title: "Test Project",
      desc: "Sample description text for test project.",
      img: "",
      link: {
        repo: "/b",
        view: "/",
      },
    },
  ];

  const [dataIndex, setDataIndex] = useState(0);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const currentData = data[dataIndex];

  useEffect(() => {
    if (!isMouseEnter) {
      const interval = setInterval(() => {
        setDataIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [data.length, isMouseEnter]);

  return (
    <div className="h-full w-full grid grid-cols-3 p-2 gap-2">
      <div className="col-span-1 flex flex-col p-2 text-start justify-center items-center bg-[url(/projectbg.webp)] bg-center text-white">
        <div className="w-full flex flex-col gap-1 h-fit backdrop-blur rounded p-3">
          <h2 className="text-6xl font-bold">Project</h2>
          <h3 className="text-4xl">{currentData.title}</h3>
          <p>{currentData.desc}</p>
        </div>
        <div className="gap-2 flex">
          {data.map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setDataIndex(index);
                }}
                className={cn(
                  index === dataIndex ? "bg-sky-500" : "bg-slate-400",
                  " w-6 h-4",
                )}
              ></div>
            );
          })}
        </div>
      </div>
      <div
        className="h-full col-span-2 relative group"
        onMouseEnter={() => {
          setIsMouseEnter(true);
        }}
        onMouseLeave={() => {
          setIsMouseEnter(false);
        }}
      >
        <img
          src={currentData.img}
          alt={currentData.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute flex items-center justify-center z-10 top-0 w-full h-full bg-transparent hover:bg-black/30 transition group gap-3">
          <a href={currentData.link.repo} target="_blank">
            <Button className="hidden group-hover:flex items-center">
              <Github /> Repository
            </Button>
          </a>
          <a href={currentData.link.view} target="_blank">
            <Button className="hidden group-hover:block">View</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
