'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`font-bold text-xl flex items-center ${className}`}>
      <div className="flex items-center">
        <span className="text-blue-700">LIQ</span>
        <span className="text-blue-900">TRADE</span>
      </div>
    </Link>
  );
};

export default Logo;
