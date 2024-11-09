import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

export const Project = () => {
  const data = [
    {
      title: "To Do List",
      desc: "Todo list app built using React.js and a framework",
      img: "/project1.png",
    },
    {
      title: "Test Project",
      desc: "Sample description text for test project.",
      img: "",
    },
    {
      title: "Test Project",
      desc: "Sample description text for test project.",
      img: "",
    },
  ];

  const [dataIndex, setDataIndex] = useState(0);

  const currentData = data[dataIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000); // Change every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [data.length]);

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
      <div className="h-full col-span-2">
        <img
          src={currentData.img}
          alt={currentData.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
