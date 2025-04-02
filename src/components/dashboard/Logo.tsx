import type React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-indigo-800 font-bold text-xl">LIQ</span>
      <span className="text-indigo-500 font-bold text-xl">TRADE</span>
    </div>
  );
};

export default Logo;
