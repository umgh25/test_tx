// components/Sidebar.tsx
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Users,
  HelpCircle,
  Bell,
  Settings,
} from "lucide-react";

const Sidebar: FC = () => {
  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <Image
          src="/logo.png"
          alt="LIQTRADE"
          width={120}
          height={30}
          className="mb-6"
        />
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center px-3 py-2 text-gray-700 rounded-md bg-blue-50"
          >
            <LayoutDashboard className="h-5 w-5 mr-3 text-blue-800" />
            <span className="text-blue-800 font-medium">Tableau de Bord</span>
          </Link>
          <Link
            href="/transactions"
            className="flex items-center px-3 py-2 text-gray-500 rounded-md hover:bg-gray-100"
          >
            <ArrowLeftRight className="h-5 w-5 mr-3 text-gray-400" />
            <span className="font-normal">Mes transactions</span>
          </Link>
          <Link
            href="/clients"
            className="flex items-center px-3 py-2 text-gray-500 rounded-md hover:bg-gray-100"
          >
            <Users className="h-5 w-5 mr-3 text-gray-400" />
            <span className="font-normal">Mes clients</span>
          </Link>
          <Link
            href="/assistance"
            className="flex items-center px-3 py-2 text-gray-500 rounded-md hover:bg-gray-100"
          >
            <HelpCircle className="h-5 w-5 mr-3 text-gray-400" />
            <span className="font-normal">Assistance</span>
          </Link>
        </nav>
      </div>

      <div className="mt-auto">
        <Link
          href="/notifications"
          className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-100"
        >
          <Bell className="h-5 w-5 mr-3 text-green-500" />
          <span className="font-normal">Mes notifications (1)</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-100"
        >
          <Settings className="h-5 w-5 mr-3 text-gray-400" />
          <span className="font-normal">Réglages</span>
        </Link>
      </div>

      <div className="p-4 mt-auto border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="/photo.png"
                alt="photo de profil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Paul Dumartin</p>
            <p className="text-xs text-gray-500">
              Statut Vérification KYC :{" "}
              <span className="text-green-500">Validé</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
