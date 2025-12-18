
import React from 'react';
import { User } from '../types';
import { Cog6ToothIcon, ArrowRightOnRectangleIcon, PencilSquareIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 pb-10">
      
      {/* Header Perfil */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">

          {/* Badge del Club con Logo - Ruta actualizada a components/logo.png */}
          <div className="absolute -top-1 -right-1 z-10 bg-black rounded-full border-2 border-[#FF6B00] p-1 w-12 h-12 shadow-[0_0_15px_rgba(255,107,0,0.5)] flex items-center justify-center overflow-hidden">
            <img 
              src="components/logo.png"
              alt="Sello" 
              className="w-full h-full object-contain"
              style={{ display: 'block' }}
            />
          </div>

          <img 
            src={user.photoURL} 
            alt={user.name} 
            className="w-28 h-28 rounded-full border-4 border-[#1A1A1B] shadow-2xl ring-2 ring-[#FF6B00]/30" 
          />

          <button className="absolute bottom-0 right-1 bg-white text-black p-2 rounded-xl shadow-lg hover:scale-110 transition-transform border border-black/10">
            <PencilSquareIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold tracking-tight">{user.name}</h2>
            <ShieldCheckIcon className="w-5 h-5 text-[#FF6B00]" />
          </div>
          <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mt-1 font-biker">
            Miembro Oficial Cais Chile
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3">
        <StatsCard value="12" label="VUELTAS" />
        <StatsCard value="1.4k" label="KM RUTA" />
        <StatsCard value="8" label="RESEÑAS" />
      </div>

      {/* Tarjeta de Motocicleta Naranja */}
      <div className="bg-gradient-to-br from-[#FF6B00] to-[#E65100] p-6 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden border-t border-white/20">
        
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-black/30 rounded-lg p-1 border border-white/10 flex items-center justify-center">
              <img src="components/logo.png" alt="logo moto" className="w-full h-full object-contain brightness-200" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">
              Garaje Cais Chile
            </p>
          </div>

          <h3 className="text-3xl font-biker font-bold text-white tracking-tighter">
            "{user.bike?.nickname}"
          </h3>

          <p className="text-sm font-medium mt-2 opacity-95 tracking-widest uppercase">
            {user.bike?.brand} {user.bike?.model} 
            <span className="opacity-60 ml-1">[{user.bike?.year}]</span>
          </p>

          <div className="flex space-x-3 mt-8">
            <button className="flex-1 bg-white text-[#FF6B00] py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-lg">
              MODIFICAR
            </button>
            <button className="flex-1 bg-black/20 text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-white/20 hover:bg-black/30 transition-colors">
              DETALLES
            </button>
          </div>
        </div>

        {/* Marca de agua del logo */}
        <div className="absolute -bottom-10 -right-10 opacity-10 transform -rotate-12 scale-150 pointer-events-none">
          <img src="components/logo.png" alt="watermark" className="w-64 h-64 object-contain grayscale invert brightness-0" />
        </div>
      </div>

      {/* Lista de Opciones */}
      <div className="space-y-3 px-2">
        <SettingItem icon={<Cog6ToothIcon className="w-5 h-5" />} label="AJUSTES DE CUENTA" />
        <SettingItem 
          icon={<ArrowRightOnRectangleIcon className="w-5 h-5" />} 
          label="CERRAR SESIÓN" 
          color="text-red-500" 
          onClick={onLogout} 
        />
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center pt-6 opacity-30 pb-4">
        <img src="components/logo.png" alt="small logo" className="w-10 h-10 mb-2 grayscale" />
        <p className="text-center text-[7px] font-bold uppercase tracking-[0.6em]">
          CAIS CHILE AMI &bull; RUTA 2024
        </p>
      </div>

    </div>
  );
};

const StatsCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
  <div className="bg-[#2A2A2B] p-4 rounded-2xl text-center border border-white/5 shadow-sm">
    <span className="block text-xl font-biker font-bold text-[#FF6B00]">{value}</span>
    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1 block font-biker">
      {label}
    </span>
  </div>
);

const SettingItem: React.FC<{ icon: React.ReactNode, label: string, color?: string, onClick?: () => void }> = ({ icon, label, color = "text-white", onClick }) => (
  <button 
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 bg-[#2A2A2B] rounded-2xl border border-white/5 hover:bg-white/5 transition-all group"
  >
    <div className={`flex items-center space-x-4 ${color}`}>
      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#FF6B00]/10 transition-colors">
        {icon}
      </div>
      <span className="font-bold text-xs tracking-widest uppercase font-biker">
        {label}
      </span>
    </div>
    <div className="text-gray-700 group-hover:text-[#FF6B00] transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </button>
);

export default Profile;
