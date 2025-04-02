import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';

export default function Sidebar({ active = 'Tableau de Bord' }: { active?: string }) {
  return (
    <div className="min-w-[220px] h-full bg-white flex flex-col justify-between border-r border-gray-100">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center justify-center">
          <Image
            src="/images/liqtrade-logo.png"
            alt="LiqTrade Logo"
            width={120}
            height={40}
            className="mt-2"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col mt-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={`flex items-center py-3 px-6 ${
                active === item.title
                  ? 'bg-indigo-50 text-[#2B3674] font-medium border-l-4 border-[#4285F4]'
                  : 'text-[#A3AED0]'
              }`}
            >
              <div className={`flex items-center w-full ${active === item.title ? 'ml-[-2px]' : ''}`}>
                <span className="material-icons mr-3 text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile Section */}
      <div className="border-t border-gray-100 mt-4 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="User Profile"
              width={40}
              height={40}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-[#2B3674]">Paul Dumartin</p>
            <div className="flex items-center text-xs text-[#A3AED0]">
              <p>Statut Vérification KYC: </p>
              <span className="ml-1 text-green-500 font-medium">Validé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
