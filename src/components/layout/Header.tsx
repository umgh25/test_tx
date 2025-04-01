'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="pt-1 pb-4 px-6 flex items-center bg-white relative">
      
      <div className="flex items-center mr-auto pl-12">
        <Link href="/" className="mr-12">
          <Image
            src="/logo.png"
            alt="LIQTRADE"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="flex items-center">
          <Link href="/pret" className="text-gray-700 hover:text-blue-700 transition-colors mr-8">
            Prêt
          </Link>
          <Link href="/affacturage" className="text-gray-700 hover:text-blue-700 transition-colors">
            Affacturage
          </Link>
        </nav>
      </div>
      
      
      <div className="hidden md:flex items-center pr-16">
        <Link href="/simulateur" className="text-gray-700 hover:text-blue-700 transition-colors mr-8">
          Simulateur
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-700 transition-colors mr-8">
          Contact
        </Link>
        <Link href="/publications" className="text-gray-700 hover:text-blue-700 transition-colors mr-8">
          Publications
        </Link>
        <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50 mr-4">
          S&apos;inscrire
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Se connecter
        </Button>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white p-4 shadow-lg md:hidden z-50">
          <div className="flex flex-col space-y-4">
            <Link href="/simulateur" className="text-gray-700 hover:text-blue-700 transition-colors">Simulateur</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 transition-colors">Contact</Link>
            <Link href="/publications" className="text-gray-700 hover:text-blue-700 transition-colors">Publications</Link>
            <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-50">
              S&apos;inscrire
            </Button>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Se connecter
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;