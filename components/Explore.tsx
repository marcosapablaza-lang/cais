
import React, { useState } from 'react';
import { Place } from '../types';
import { MapPinIcon, StarIcon, CameraIcon } from '@heroicons/react/24/solid';

const MOCK_PLACES: Place[] = [
  {
    id: 'p1',
    name: 'Taller MotoExtreme Vitacura',
    type: 'workshop',
    lat: -33.3986,
    lng: -70.5750,
    rating: 4.8,
    reviewsCount: 124,
    image: 'https://picsum.photos/seed/workshop/400/200'
  },
  {
    id: 'p2',
    name: 'Café de los Riders (Piruina)',
    type: 'restaurant',
    lat: -33.6050,
    lng: -70.9200,
    rating: 4.5,
    reviewsCount: 89,
    image: 'https://picsum.photos/seed/cafe/400/200'
  },
  {
    id: 'p3',
    name: 'Mirador Cuesta La Dormida',
    type: 'viewpoint',
    lat: -33.0500,
    lng: -71.0500,
    rating: 5.0,
    reviewsCount: 450,
    image: 'https://picsum.photos/seed/view/400/200'
  }
];

const Explore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  return (
    <div className="flex flex-col space-y-4 h-full">
      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
        {['todos', 'talleres', 'restaurantes', 'miradores', 'bencina'].map(cat => (
          <button 
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all uppercase ${
              selectedCategory === cat ? 'bg-[#FF6B00] text-white shadow-lg' : 'bg-[#4A4A4F]/20 text-gray-400 border border-[#4A4A4F]/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Map Simulation */}
      <div className="relative h-64 w-full bg-[#111111] rounded-3xl overflow-hidden border border-[#4A4A4F]/40">
        <div className="absolute inset-0 opacity-40 bg-[url('https://picsum.photos/seed/darkmap/800/600')] bg-cover"></div>
        
        {/* Mock Markers */}
        <div className="absolute top-1/2 left-1/3">
           <MapPinIcon className="w-8 h-8 text-[#FF6B00] drop-shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
        </div>
        <div className="absolute bottom-1/4 right-1/4">
           <MapPinIcon className="w-8 h-8 text-[#FF6B00]" />
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
           <p className="text-[10px] text-white/80 font-bold uppercase">Cerca de tu ubicación</p>
           <p className="text-sm font-bold">Santiago, Región Metropolitana</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-md mt-2">Recomendados para ti</h3>
        {MOCK_PLACES.map(place => (
          <div key={place.id} className="bg-[#4A4A4F]/10 rounded-2xl p-3 flex space-x-4 border border-[#4A4A4F]/20 hover:border-[#FF6B00]/40 transition-colors">
            <img src={place.image} alt={place.name} className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h4 className="font-bold text-sm leading-tight">{place.name}</h4>
                <div className="flex items-center mt-1 text-xs text-gray-400">
                  <StarIcon className="w-3 h-3 text-yellow-500 mr-1" />
                  <span className="font-bold text-white mr-1">{place.rating}</span>
                  <span>({place.reviewsCount} reseñas)</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-white/10 hover:bg-[#FF6B00]/20 text-[10px] font-bold py-1 rounded-lg transition-colors flex items-center justify-center">
                  VER MAPA
                </button>
                <button className="flex-1 bg-[#FF6B00] hover:bg-[#FF8533] text-[10px] font-bold py-1 rounded-lg transition-colors flex items-center justify-center">
                  VALORAR
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
