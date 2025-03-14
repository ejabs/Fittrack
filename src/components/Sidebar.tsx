import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, DumbbellIcon, UtensilsIcon, LineChartIcon, SettingsIcon, XIcon } from 'lucide-react';
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
const Sidebar = ({
  sidebarOpen,
  setSidebarOpen
}: SidebarProps) => {
  return <>
      {/* Mobile sidebar backdrop */}
      <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)} />
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform md:translate-x-0 md:static md:inset-auto md:h-screen ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <span className="text-xl font-bold text-blue-600">FitTrack</span>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-6 px-4">
          <NavLink to="/" className={({
          isActive
        }) => `flex items-center px-4 py-3 mb-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`} end>
            <HomeIcon className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/workouts" className={({
          isActive
        }) => `flex items-center px-4 py-3 mb-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <DumbbellIcon className="w-5 h-5 mr-3" />
            <span>Workouts</span>
          </NavLink>
          <NavLink to="/nutrition" className={({
          isActive
        }) => `flex items-center px-4 py-3 mb-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <UtensilsIcon className="w-5 h-5 mr-3" />
            <span>Nutrition</span>
          </NavLink>
          <NavLink to="/progress" className={({
          isActive
        }) => `flex items-center px-4 py-3 mb-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <LineChartIcon className="w-5 h-5 mr-3" />
            <span>Progress</span>
          </NavLink>
          <NavLink to="/settings" className={({
          isActive
        }) => `flex items-center px-4 py-3 mb-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
            <SettingsIcon className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>
    </>;
};
export default Sidebar;