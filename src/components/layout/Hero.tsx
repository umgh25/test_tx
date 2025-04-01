'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center bg-white overflow-hidden">
      {/* Left Content */}
      <div className="max-w-xl z-10 text-center md:text-left">
        <div className="mb-4">
          <span className="text-blue-700 font-semibold uppercase text-sm">
            FINANCEMENT PROFESSIONNEL À COURT TERME.
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Notre intérêt,
          <br />
          c&apos;est le vôtre.
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Simple, efficace et rapide. Profitez du service Liqtrade
          <br />
          sans garantie personnelle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg h-auto">
            Se connecter
          </Button>
          <Link href="/inscription" className="group">
            <Button variant="ghost" className="text-green-500 px-4 py-6 h-auto text-lg flex items-center">
              S&apos;inscrire
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="relative mt-16 md:mt-0 z-10 flex justify-center md:justify-end w-full md:w-auto">
        <div className="relative">
          <Image
            src="/mobile.png"
            alt="Application mobile Liqtrade"
            width={550}
            height={700}
            priority
            className="z-10 relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;