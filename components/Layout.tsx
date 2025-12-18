
import React from 'react';
import { NavTab } from '../types';
import { 
  HomeIcon, 
  MapIcon, 
  PlayCircleIcon, 
  RectangleStackIcon, 
  UserCircleIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconSolid, 
  MapIcon as MapIconSolid, 
  PlayCircleIcon as PlayCircleIconSolid, 
  RectangleStackIcon as RectangleStackIconSolid, 
  UserCircleIcon as UserCircleIconSolid 
} from '@heroicons/react/24/solid';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

// Fixed: Corrected Layout component with closing tags and proper structure
const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#1A1A1B] shadow-2xl relative overflow-hidden text-white">
      
      {/* Header con Logo - Ruta: ./components/logo.png */}
      <header className="px-5 py-3 flex justify-between items-center border-b border-[#4A4A4F]/20 bg-[#1A1A1B]/95 backdrop-blur-md sticky top-0 z-50">
        <div 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => setActiveTab(NavTab.HOME)}
        >
          <div className="w-11 h-11 rounded-full border-2 border-[#FF6B00] bg-black overflow-hidden p-0.5 shadow-[0_0_10px_rgba(255,107,0,0.3)] group-active:scale-90 transition-transform flex items-center justify-center">
            <img 
              src="./components/logo.png"
              alt="Cais Logo" 
              className="w-full h-full object-contain"
              style={{ display: 'block' }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-freakshow text-white tracking-wide leading-none pt-1">
              CAIS CHILE
            </h1>
            <span className="text-[9px] text-[#FF6B00] font-bold tracking-[0.4em] uppercase leading-none mt-0.5">
              A.M.I.
            </span>
          </div>
        </div>
        
        <button className="p-2.5 bg-[#4A4A4F]/20 rounded-xl hover:bg-[#FF6B00]/20 transition-colors relative border border-white/5">
          <BellIcon className="w-5 h-5 text-white" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#FF6B00] rounded-full border border-[#1A1A1B]"></span>
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-28 px-4 pt-4">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#0F0F10]/98 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex justify-between items-center z-50">
        
        <NavButton 
          icon={activeTab === NavTab.HOME ? <HomeIconSolid /> : <HomeIcon />} 
          label="INICIO" 
          active={activeTab === NavTab.HOME} 
          onClick={() => setActiveTab(NavTab.HOME)} 
        />

        <NavButton 
          icon={activeTab === NavTab.EXPLORE ? <MapIconSolid /> : <MapIcon />} 
          label="MAPA" 
          active={activeTab === NavTab.EXPLORE} 
          onClick={() => setActiveTab(NavTab.EXPLORE)} 
        />
        
        {/* Botón Central RUTA */}
        <div className="relative -mt-14">
          <div className="absolute inset-0 bg-[#FF6B00] rounded-full blur-xl opacity-20" />
          
          <button 
            onClick={() => setActiveTab(NavTab.ROUTE)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-2xl relative z-10 border-4 border-[#1A1A1B] ${
              activeTab === NavTab.ROUTE 
                ? 'bg-white text-[#FF6B00] scale-110' 
                : 'bg-[#FF6B00] text-white hover:bg-[#FF8533]'
            }`}
          >
            <PlayCircleIconSolid className="w-10 h-10" />
          </button>

          <span className={`text-[9px] absolute -bottom-6 left-1/2 -translate-x-1/2 font-bold tracking-widest ${
            activeTab === NavTab.ROUTE ? 'text-[#FF6B00]' : 'text-gray-500'
          }`}>
            RUTA
          </span>
        </div>

        <NavButton 
          icon={activeTab === NavTab.MY_ROUTES ? <RectangleStackIconSolid /> : <RectangleStackIcon />} 
          label="MIS RUTAS" 
          active={activeTab === NavTab.MY_ROUTES} 
          onClick={() => setActiveTab(NavTab.MY_ROUTES)} 
        />

        <NavButton 
          icon={activeTab === NavTab.PROFILE ? <UserCircleIconSolid /> : <UserCircleIcon />} 
          label="PERFIL" 
          active={activeTab === NavTab.PROFILE} 
          onClick={() => setActiveTab(NavTab.PROFILE)} 
        />
      </nav>
    </div>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

// Fixed: Defined NavButton component which was missing
const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-1 transition-all ${
      active ? 'text-[#FF6B00]' : 'text-gray-500 hover:text-gray-300'
    }`}
  >
    <div className={`w-6 h-6 ${active ? 'scale-110' : ''} transition-transform`}>
      {icon}
    </div>
    <span className={`text-[9px] font-bold tracking-widest transition-opacity ${active ? 'opacity-100' : 'opacity-60'}`}>
      {label}
    </span>
  </button>
);

// Fixed: Added missing default export
export default Layout;
