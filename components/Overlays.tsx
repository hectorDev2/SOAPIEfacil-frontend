"use client";

import React from 'react';
import ConsentModal from './ConsentModal';
import { useApp } from '../context/AppContext';

const Overlays: React.FC = () => {
  const { showConsent, isRecording, setShowConsent, confirmRecording } = useApp();

  return (
    <>
      {showConsent && (
        <ConsentModal 
          onAccept={confirmRecording} 
          onCancel={() => setShowConsent(false)} 
        />
      )}

      {isRecording && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-300">
          <div className="absolute inset-0 bg-background-dark/40 backdrop-blur-sm"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full scale-150 animate-pulse"></div>
              <div className="w-40 h-40 rounded-full bg-surface-dark border-4 border-primary flex items-center justify-center relative shadow-2xl">
                <span className="material-symbols-outlined text-7xl text-primary animate-pulse">mic</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">Escuchando...</h2>
            <p className="text-slate-300 text-lg max-w-xs font-medium">Capturando signos y síntomas para tu nota SOAPIE.</p>
            <div className="mt-8 flex gap-1 items-end h-8">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 bg-primary rounded-full animate-bounce" style={{ height: `${20 + Math.random() * 60}%`, animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlays;
