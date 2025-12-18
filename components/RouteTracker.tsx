
import React, { useState, useEffect, useRef } from 'react';
import { User, LocationPoint } from '../types';
import { StopCircleIcon, PlayIcon, PauseIcon, CheckIcon, GlobeAltIcon, LockClosedIcon } from '@heroicons/react/24/solid';

interface RouteTrackerProps {
  user: User;
  onComplete: () => void;
}

const RouteTracker: React.FC<RouteTrackerProps> = ({ user, onComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [points, setPoints] = useState<LocationPoint[]>([]);
  const [isPublic, setIsPublic] = useState(true);
  const [title, setTitle] = useState('');
  
  // Fix: Use ReturnType<typeof setInterval> to avoid NodeJS namespace issues in browser environment
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRecording && !isPaused) {
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
        // Simulate distance growth
        setDistance(prev => prev + 0.005);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording, isPaused]);

  const handleStart = () => {
    setIsRecording(true);
    setIsPaused(false);
    // Real geolocation logic would go here
  };

  const handleStop = () => {
    setIsRecording(false);
    // Show summary or save
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="bg-[#4A4A4F]/20 p-6 rounded-3xl border border-[#4A4A4F]/50 flex flex-col items-center">
        <div className="w-full mb-6 flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">En Movimiento</span>
          <div className="flex items-center text-red-500 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
            <span className="text-[10px] font-bold">GPS ACTIVO</span>
          </div>
        </div>

        <div className="text-center space-y-2">
          <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">Distancia (KM)</span>
          <h2 className="text-6xl font-biker font-bold text-[#FF6B00]">{distance.toFixed(2)}</h2>
        </div>

        <div className="grid grid-cols-2 w-full mt-10 gap-4">
          <div className="text-center p-4 bg-[#1A1A1B] rounded-2xl border border-[#4A4A4F]/30">
            <span className="text-[10px] text-gray-500 font-bold block uppercase mb-1">Tiempo</span>
            <span className="text-xl font-bold font-mono">{formatTime(elapsedTime)}</span>
          </div>
          <div className="text-center p-4 bg-[#1A1A1B] rounded-2xl border border-[#4A4A4F]/30">
            <span className="text-[10px] text-gray-500 font-bold block uppercase mb-1">Vel. Promedio</span>
            <span className="text-xl font-bold font-mono">{(distance > 0 ? (distance / (elapsedTime / 3600)) : 0).toFixed(1)} km/h</span>
          </div>
        </div>
      </div>

      {!isRecording ? (
        <button 
          onClick={handleStart}
          className="w-full py-5 bg-[#FF6B00] text-white rounded-2xl font-bold text-xl flex items-center justify-center shadow-xl shadow-[#FF6B00]/20 hover:bg-[#FF8533] transition-all transform active:scale-95"
        >
          <PlayIcon className="w-6 h-6 mr-2" />
          INICIAR VIAJE
        </button>
      ) : (
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center transition-all ${isPaused ? 'bg-[#FF6B00] text-white' : 'bg-white text-black'}`}
            >
              {isPaused ? <PlayIcon className="w-6 h-6 mr-2" /> : <PauseIcon className="w-6 h-6 mr-2" />}
              {isPaused ? 'REANUDAR' : 'PAUSAR'}
            </button>
            <button 
              onClick={handleStop}
              className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center"
            >
              <StopCircleIcon className="w-6 h-6 mr-2" />
              TERMINAR
            </button>
          </div>

          <div className="bg-[#4A4A4F]/20 p-4 rounded-2xl space-y-4">
             <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300">PRIVACIDAD DE RUTA</span>
                <button 
                  onClick={() => setIsPublic(!isPublic)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isPublic ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-400'}`}
                >
                  {isPublic ? <GlobeAltIcon className="w-4 h-4" /> : <LockClosedIcon className="w-4 h-4" />}
                  <span className="text-xs font-bold">{isPublic ? 'PÚBLICA' : 'PRIVADA'}</span>
                </button>
             </div>
             <input 
              type="text" 
              placeholder="Título del viaje (Opcional)"
              className="w-full bg-[#1A1A1B] border border-[#4A4A4F]/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
             />
          </div>
        </div>
      )}

      {distance > 0 && !isRecording && (
        <div className="animate-bounce text-center text-xs text-[#FF6B00] font-bold">
          ¡Listo para guardar! Presiona INICIAR para continuar.
        </div>
      )}
    </div>
  );
};

export default RouteTracker;
