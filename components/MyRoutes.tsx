
import React, { useState } from 'react';
import { BikerRoute } from '../types';
import { GlobeAltIcon, LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface MyRoutesProps {
  userId: string;
}

const MyRoutes: React.FC<MyRoutesProps> = ({ userId }) => {
  const [filter, setFilter] = useState<'all' | 'public' | 'private'>('all');

  const MOCK_SAVED: BikerRoute[] = [
    {
      id: 's1',
      userId: userId,
      userName: 'Tú',
      title: 'Salida rápida Farellones',
      path: [],
      distance: 32.1,
      duration: 1800,
      isPublic: true,
      rating: 4.0,
      createdAt: Date.now() - 172800000,
      thumbnail: 'https://picsum.photos/seed/fare/600/300'
    },
    {
      id: 's2',
      userId: userId,
      userName: 'Tú',
      title: 'Prueba de moto nueva',
      path: [],
      distance: 12.5,
      duration: 900,
      isPublic: false,
      rating: 0,
      createdAt: Date.now() - 432000000,
      thumbnail: 'https://picsum.photos/seed/test/600/300'
    }
  ];

  const filtered = MOCK_SAVED.filter(r => {
    if (filter === 'public') return r.isPublic;
    if (filter === 'private') return !r.isPublic;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold">Mis Aventuras</h2>
        
        {/* Filter Toggle */}
        <div className="flex bg-[#4A4A4F]/20 p-1 rounded-xl border border-[#4A4A4F]/30">
          <button 
            onClick={() => setFilter('all')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${filter === 'all' ? 'bg-[#FF6B00] text-white shadow' : 'text-gray-400'}`}
          >
            TODAS
          </button>
          <button 
            onClick={() => setFilter('public')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${filter === 'public' ? 'bg-[#FF6B00] text-white shadow' : 'text-gray-400'}`}
          >
            PÚBLICAS
          </button>
          <button 
            onClick={() => setFilter('private')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${filter === 'private' ? 'bg-[#FF6B00] text-white shadow' : 'text-gray-400'}`}
          >
            PRIVADAS
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.length > 0 ? filtered.map(route => (
          <div key={route.id} className="bg-[#4A4A4F]/10 rounded-2xl overflow-hidden border border-[#4A4A4F]/30 flex group">
             <div className="w-32 h-32 flex-shrink-0 relative">
               <img src={route.thumbnail} className="w-full h-full object-cover" alt={route.title} />
               <div className="absolute top-2 left-2">
                  {route.isPublic ? (
                    <GlobeAltIcon className="w-4 h-4 text-green-400 drop-shadow-md" />
                  ) : (
                    <LockClosedIcon className="w-4 h-4 text-gray-300 drop-shadow-md" />
                  )}
               </div>
             </div>
             <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                   <h3 className="font-bold text-sm leading-tight line-clamp-2">{route.title}</h3>
                   <p className="text-[10px] text-gray-500 font-bold mt-1">{new Date(route.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex justify-between items-end mt-2">
                   <div className="text-xs">
                      <span className="font-biker font-bold text-[#FF6B00]">{route.distance}</span>
                      <span className="text-gray-400 ml-1">km</span>
                   </div>
                   <button className="text-[10px] font-bold text-white bg-[#4A4A4F]/40 px-3 py-1 rounded-lg hover:bg-[#FF6B00]/40 transition-colors">
                      DETALLES
                   </button>
                </div>
             </div>
          </div>
        )) : (
          <div className="py-20 flex flex-col items-center text-center space-y-4 opacity-40">
            <MagnifyingGlassIcon className="w-12 h-12" />
            <p className="text-sm font-bold">No hay rutas guardadas aún.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRoutes;
