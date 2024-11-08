import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Project = () => {
  return (
    <div className="h-screen w-full p-2 bg-[#0c0f11]/30  backdrop-blur text-[#41719E] flex justify-center items-center">
      <div className=" w-2/3 flex-shrink-0">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {" "}
              <div className="w-full bg-black flex justify-end p-2 gap-2 rounded-t-xl">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div className="w-full h-[400px] object-cover bg-cover bg-center bg-[url(/project1.png)]"></div>
              <div className="bg-black w-full mt-2 p-2 flex justify-between items-center">
                <h1 className="font-bold">React.js Todo List </h1>
                <div className="flex gap-3">
                  <Button>
                    <Eye />
                  </Button>
                  <Button>
                    <GitHubLogoIcon />
                  </Button>
                </div>
              </div>
            </CarouselItem>{" "}
            <CarouselItem>
              {" "}
              <div className="w-full bg-black flex justify-end p-2 gap-2 rounded-t-xl">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div className="w-full h-[400px] object-cover bg-cover bg-center bg-[url(/project1.png)]"></div>
              <div className="bg-black w-full mt-2 p-2 flex justify-between items-center">
                <h1 className="font-bold">React.js Todo List </h1>
                <div className="flex gap-3">
                  <Button>
                    <Eye />
                  </Button>
                  <Button>
                    <GitHubLogoIcon />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
