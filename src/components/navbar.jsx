import { cn } from "../lib/utils";

import { Contact, Home, Menu, MenuIcon, TabletSmartphone } from "lucide-react";
import { useState } from "react";

export const NavBar = ({ onClick, display }) => {
  const nav = [
    {
      title: (
        <Home
          data-value="home"
          onClick={onClick}
          className="hover:cursor-pointer"
        />
      ),
    },
    {
      title: (
        <TabletSmartphone
          data-value="project"
          onClick={onClick}
          className="hover:cursor-pointer"
        />
      ),
      dataValue: "project",
    },
    {
      title: (
        <Contact
          data-value="contact"
          onClick={onClick}
          className="hover:cursor-pointer"
        />
      ),
    },
  ];

  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <nav className="w-full max-w-screen fixed z-50 top-5 px-5 flex justify-between items-center">
      <ul className="hidden lg:flex gap-2 bg-slate-800/30 backdrop-blur-sm w-fit p-4 text-white rounded-full">
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
      <ul className="lg:hidden">
        <li className="bg-slate-800/30 backdrop-blur-sm w-fit p-3 rounded text-white">
          <MenuIcon onClick={handleClick} />
          <ul
            className={cn(
              menu ? "flex flex-col gap-2" : "hidden",
              "transition-all duration-300 ease-in-out mt-3",
            )}
          >
            {nav.map((menu) => {
              return <li key={menu.dataValue}>{menu.title}</li>;
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};
