import { cn } from "../lib/utils";
import { split } from "postcss/lib/list";

export const Clock = ({ className }) => {
  const date = new Date();
  const time =
    String(date.getHours()).padStart(2, "0") +
    ":" +
    String(date.getMinutes()).padStart(2, "0");
  const currDate =
    date.getDay() +
    " " +
    date.toLocaleString("id", { month: "long" }) +
    " " +
    date.getFullYear();

  const splitTime = split(time, ":");
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-3xl bg-transparent lg:bg-[#0c0f11] text-white row-span-1 h-full p-3a",
        className,
      )}
    >
      <div className="text-9xl lg:hidden flex flex-col justify-center items-center">
        <h1>{splitTime[0]}</h1>
        <h1>{splitTime[1]}</h1>
      </div>
      <div className="hidden lg:block text-center">
        <h1 className="text-5xl">{time}</h1>
        <h1 className="text-3xl">{currDate}</h1>
      </div>
    </div>
  );
};
