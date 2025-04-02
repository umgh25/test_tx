import type React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Bonjour {username} !</h1>
      <div className="flex items-center gap-4">
        <Button variant="default" className="bg-blue-900 hover:bg-blue-950 text-white ">
          Demander un financement
        </Button>
        <Avatar className="h-12 w-12 hidden sm:flex border-2 border-white shadow-sm">
          <AvatarImage src="/avatar.png" alt={username} />
          <AvatarFallback className="bg-blue-100 text-blue-800">
            {username.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
