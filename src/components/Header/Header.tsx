import React from 'react';
import Image from 'next/image';
import { USER_DATA } from '@/lib/constants';

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center pb-4">
      <h1 className="text-3xl font-semibold text-[#2B3674]">
        Bonjour {USER_DATA.name.split(' ')[0]} !
      </h1>

      <div className="flex items-center">
        <button className="bg-[#2B3674] text-white font-medium py-2 px-6 rounded-md mr-6">
          Demander un financement
        </button>

        <div className="h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
