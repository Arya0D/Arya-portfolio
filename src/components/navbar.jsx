import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { cn } from "../lib/utils";

import { NavClock } from "./NavClock";
import { Button } from "./ui/button";
import { MusicPlayer } from "./MusicPlayer";

export const NavBar = ({ onClick, display }) => {
  return (
    <nav className="w-full max-w-screen fixed z-10 top-5 px-5 flex justify-between items-center">
      <ul className="flex gap-2 bg-slate-800/30 backdrop-blur-sm w-fit p-4 text-white rounded-full">
        <li onClick={onClick} data-value="home" className="cursor-pointer">
          Home
        </li>
        <li onClick={onClick} data-value="project" className="cursor-pointer">
          Project
        </li>
        <li onClick={onClick} data-value="contact" className="cursor-pointer">
          Contact
        </li>
      </ul>
      <ul
        className={cn(
          display == "home"
            ? "hidden"
            : "flex gap-2 bg-[#0c0f11] text-[#41719E]  p-3 rounded",
        )}
      >
        <li>
          <NavClock />
        </li>
      </ul>
    </nav>
  );
};
