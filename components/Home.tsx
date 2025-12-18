
import React from 'react';
import { BikerRoute } from '../types';
import { ShareIcon, HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const MOCK_ROUTES: BikerRoute[] = [
  {
    id: 'r1',
    userId: 'u1',
    userName: 'Pablo M.',
    title: 'Cajón del Maipo - Embalse El Yeso',
    path: [],
    distance: 45.2,
    duration: 3600,
    isPublic: true,
    rating: 5,
    createdAt: Date.now() - 3600000,
    thumbnail: 'https://picsum.photos/seed/embalse/600/300'
  },
  {
    id: 'r2',
    userId: 'u2',
    userName: 'Valentina R.',
    title: 'Ruta de la Fruta (Curacaví)',
    path: [],
    distance: 120.5,
    duration: 7200,
    isPublic: true,
    rating: 4.5,
    createdAt: Date.now() - 86400000,
    thumbnail: 'https://picsum.photos/seed/rutafruta/600/300'
  }
];

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Feed de Rutas</h2>
        <button className="text-xs text-[#FF6B00] font-bold underline">Filtrar Chile</button>
      </div>

      <div className="space-y-4">
        {MOCK_ROUTES.map((route) => (
          <div key={route.id} className="bg-[#4A4A4F]/20 rounded-2xl overflow-hidden border border-[#4A4A4F]/40">
            <div className="relative h-48">
              <img src={route.thumbnail} alt={route.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#FF6B00] px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-lg uppercase">
                {route.distance} KM
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-md leading-tight">{route.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">Por {route.userName} • {new Date(route.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center text-[#FF6B00]">
                  <span className="text-sm font-bold mr-1">{route.rating}</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#4A4A4F]/30">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors">
                    <HeartIcon className="w-5 h-5" />
                    <span className="text-xs">12</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-[#FF6B00] transition-colors">
                    <ChatBubbleLeftIcon className="w-5 h-5" />
                    <span className="text-xs">4</span>
                  </button>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <ShareIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
