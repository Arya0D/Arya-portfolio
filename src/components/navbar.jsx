import { cn } from "../lib/utils";
import { NavClock } from "./NavClock";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export const NavBar = ({ onClick, display }) => {
  return (
    <nav className="w-full max-w-screen fixed z-10 top-5 px-5 flex justify-between items-center">
      <ul className="flex gap-2 bg-slate-800/30 backdrop-blur-sm w-fit p-4 text-white rounded-full">
        <li onClick={onClick} data-value="home">
          Home
        </li>
        <li onClick={onClick} data-value="project">
          Project
        </li>
        <li onClick={onClick} data-value="about">
          About
        </li>
      </ul>
      <ul
        className={cn(
          display == "home"
            ? "hidden"
            : "flex gap-2 bg-slate-800 text-white p-3 rounded",
        )}
      >
        <li>
          <HoverCard>
            <HoverCardTrigger>Music</HoverCardTrigger>
            <HoverCardContent>test</HoverCardContent>
          </HoverCard>
        </li>
        <li>
          <NavClock />
        </li>
      </ul>
    </nav>
  );
};
