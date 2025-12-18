import React from 'react';

interface AuthScreenProps {
  onLogin: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  return (
    <div className="h-screen w-screen max-w-md mx-auto bg-[#1A1A1B] flex flex-col justify-between p-10 relative overflow-hidden">
<img src="/logo.png" alt="Logo CAIS" />
      
      {/* Brillo ambiental naranja */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FF6B00] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />

      <div className="mt-8 z-10 flex flex-col items-center">
        
        {/* Contenedor del Logo - Ruta: ./components/logo.png */}
        <div className="relative w-72 h-72 mb-8 flex items-center justify-center bg-black/20 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[#FF6B00]/5 rounded-full blur-2xl animate-pulse" />
          
          <img 
            src="./components/logo.png"
            alt="Logo Cais Chile AMI"
            className="w-full h-full object-contain relative z-10"
            style={{ display: 'block', minWidth: '200px', minHeight: '200px' }}
          />
        </div>

        {/* Títulos con Fuente Custom */}
        <div className="text-center">
          <span className="text-[10px] text-[#FF6B00] font-bold tracking-[0.6em] uppercase opacity-90 mb-2 block font-biker">
            Comunidad Oficial
          </span>

          <h1 className="text-6xl font-freakshow text-white tracking-wider drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            CAIS CHILE
          </h1>

          <p className="text-[#FF6B00] font-biker text-sm tracking-[0.4em] font-bold mt-1">
            A.M.I.
          </p>
          
          <div className="flex items-center justify-center space-x-3 mt-6">
             <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#FF6B00]" />
             <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold italic font-biker">Lealtad & Ruta</p>
             <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#FF6B00]" />
           </div>
        </div>
      </div>

      <div className="z-10 w-full mb-8">
        <button 
          onClick={onLogin}
          className="w-full bg-[#FF6B00] text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-4 shadow-2xl shadow-[#FF6B00]/30 hover:bg-[#FF8533] transition-all active:scale-95 mb-6 border-t border-white/20"
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-6 h-6 brightness-200" alt="Google" />
          <span className="text-sm uppercase tracking-widest font-bold">INICIAR SESIÓN</span>
        </button>
        
        <div className="text-center opacity-40">
          <p className="text-[8px] text-gray-300 uppercase font-bold tracking-[0.3em]">
            República de Chile &bull; Club de Motociclistas
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />
    </div>
  );
};

export default AuthScreen;
