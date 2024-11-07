import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  User,
} from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Arya0D/" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/arya.dirham/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0f11]/30 backdrop-blur flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#0c0f11] text-[#41719E]  border-[#41719E] ">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24 bg-slate-300">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt="Profile Picture"
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl font-bold">
            Arya Dirham Wijaya Kusumah
          </CardTitle>
          <p className="text-gray-500">Web Developer</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center space-x-2">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="icon"
                asChild
                className=" text-[#41719E] bg-[#0c0f11] border-2 border-[#41719E] hover:bg-[#41719E]"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-full"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-500 " />
              <a
                href="mailto:arya1.dirham1@gmail.com"
                className="text-sm hover:underline "
              >
                arya1.dirham1@gmail.com
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
