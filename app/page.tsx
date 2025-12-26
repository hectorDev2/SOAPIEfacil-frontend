"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const WelcomePage: React.FC = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/home');
  };

  return (
    <div className="relative flex-1 flex flex-col overflow-hidden h-screen">
      <header className="flex items-center justify-center p-6 pb-2 z-10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">medical_services</span>
          <h2 className="text-white text-lg font-extrabold tracking-tight">SOAPIEfacil</h2>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full relative">
        <div className="w-full px-6 py-8 flex justify-center items-center flex-1">
          <div className="relative w-full aspect-[4/5] max-h-[400px] overflow-hidden rounded-xl flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 animate-pulse"></div>
            <div 
              className="w-full h-full bg-center bg-contain bg-no-repeat z-10 opacity-90"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxP3MKKajJqGDUquuLy6D71YyUfXfhGu4_rXE534zZ4vQ8LFsne4Wb-6z99bYA7KPNnmJOusBh0zpNaAuOnXHBeU7EqiEq2bfAFd_TUZBxYtGUyf7ysGkFGSYEY726jUGAn1k4XZSdz6K9ofx--wpX3LqqoPdpIiv6gH3x6ChcjRbWsijofaSzcexW0o3KJy5N3ERlSDjZnPuqtOEnGF2Y0e4gTXvh-8VriRJ73AkDjXFu8bh2WcWLiQ9zgx97d0lkokq1FJT1JsM")`,
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            ></div>
            <div className="absolute bottom-10 bg-surface-dark/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3 shadow-lg z-20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">Potenciado por IA</span>
            </div>
          </div>
        </div>

        <div className="w-full px-6 flex flex-col items-center text-center z-10 -mt-4 pb-4">
          <h1 className="text-white tracking-tight text-[36px] font-bold leading-[1.1] mb-4">
            Documentación,<br/>
            <span className="text-primary">Lista.</span>
          </h1>
          <p className="text-gray-400 text-base font-normal leading-relaxed max-w-[320px]">
            Convierte tu voz en notas SOAPIE estructuradas al instante. Concéntrate en tu paciente, no en el papeleo.
          </p>
        </div>
      </main>

      <footer className="w-full p-6 pb-8 bg-background-dark z-20">
        <div className="flex flex-col gap-4">
          <button 
            onClick={handleStart}
            className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-primary text-background-dark shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative text-lg font-bold tracking-wide flex items-center gap-2">
              Comenzar Ahora
              <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
            </span>
          </button>
          <div className="flex items-center justify-center gap-1.5 opacity-60">
            <span className="material-symbols-outlined text-primary text-sm">lock</span>
            <span className="text-white text-xs font-medium tracking-wide">Seguro y Privado • Cumple con HIPAA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
