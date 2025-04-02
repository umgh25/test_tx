'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ArrowLeftRight,
  Users,
  HelpCircle,
  Bell,
  Settings
} from 'lucide-react';
import Logo from './Logo';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { use } from 'react';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, active }) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
        active
          ? 'bg-slate-100 text-blue-700'
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: <LayoutDashboard size={20} />, label: 'Tableau de Bord' },
    { href: '/transactions', icon: <ArrowLeftRight size={20} />, label: 'Mes transactions' },
    { href: '/clients', icon: <Users size={20} />, label: 'Mes clients' },
    { href: '/assistance', icon: <HelpCircle size={20} />, label: 'Assistance' },
    { href: '/notifications', icon: <Bell size={20} />, label: 'Mes notifications (1)' },
    { href: '/reglages', icon: <Settings size={20} />, label: 'Réglages' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col p-4">
      <div className="mb-8 px-3">
        <Logo />
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={pathname === item.href}
          />
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
            <AvatarImage src="/avatar.png" alt="Paul Dumarin" />
            <AvatarFallback className="bg-blue-100 text-blue-800">PD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-medium leading-none">Paul Dumarin</p>
            <div className="flex items-center mt-1">
              <p className="text-xs text-slate-500 mr-1">Statut Vérification KYC:</p>
              <Badge className="text-xs h-5 bg-green-100 text-green-700 hover:bg-green-200">Validé</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
