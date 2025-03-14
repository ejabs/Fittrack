import React from 'react';
import { MenuIcon, BellIcon, UserIcon } from 'lucide-react';
interface MobileHeaderProps {
  setSidebarOpen: (open: boolean) => void;
}
const MobileHeader = ({
  setSidebarOpen
}: MobileHeaderProps) => {
  return <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6 md:hidden">
      <button onClick={() => setSidebarOpen(true)} className="text-gray-500 hover:text-gray-600 focus:outline-none">
        <MenuIcon className="h-6 w-6" />
      </button>
      <div className="text-lg font-semibold text-blue-600">FitTrack</div>
      <div className="flex items-center space-x-3">
        <button className="text-gray-500 hover:text-gray-600 focus:outline-none relative">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
          <UserIcon className="h-6 w-6" />
        </button>
      </div>
    </header>;
};
export default MobileHeader;