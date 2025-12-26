
import React from 'react';

interface ConsentModalProps {
  onAccept: () => void;
  onCancel: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ onAccept, onCancel }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end items-center bg-background-dark/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 z-0" 
        onClick={onCancel}
      ></div>
      
      <div className="relative z-10 w-full max-w-md bg-surface-dark rounded-t-[32px] shadow-2xl border-t border-white/5 flex flex-col animate-in slide-in-from-bottom duration-500">
        <div className="w-full flex justify-center pt-5 pb-2 cursor-grab active:cursor-grabbing">
          <div className="h-1.5 w-12 rounded-full bg-slate-700"></div>
        </div>

        <div className="flex flex-col px-6 pt-4 pb-8 items-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full scale-125"></div>
            <div className="relative flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lock_person</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center mb-8">
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white">
              Antes de empezar...
            </h1>
            <p className="text-slate-400 text-base font-medium leading-relaxed max-w-sm">
              Para generar tu nota SOAPIE automáticamente, necesitamos grabar la consulta. El audio se procesa de forma segura y se descarta tras el análisis.
            </p>
            <div className="mt-2 bg-black/20 px-4 py-3 rounded-xl border border-white/5 w-full">
              <p className="text-sm font-semibold text-slate-200 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                ¿Tienes el consentimiento del paciente?
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full mb-6">
            <button 
              onClick={onAccept}
              className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary hover:bg-[#5eead4] active:scale-[0.98] transition-all shadow-lg shadow-primary/25"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0f171a]">mic</span>
                <span className="text-[#0f171a] text-lg font-bold leading-normal tracking-wide">Aceptar y Grabar</span>
              </div>
            </button>
            <button 
              onClick={onCancel}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-transparent border border-slate-700 text-slate-300 hover:bg-white/5 text-base font-bold leading-normal tracking-wide active:scale-[0.98] transition-all"
            >
              <span>No, cancelar</span>
            </button>
          </div>

          <button className="group flex items-center gap-1 py-2 px-4 rounded-lg hover:bg-white/5 transition-colors">
            <span className="text-slate-500 text-xs font-normal">Ver términos legales completos</span>
            <span className="material-symbols-outlined text-[14px] text-slate-500 group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div className="h-6 w-full bg-surface-dark"></div>
      </div>
    </div>
  );
};

export default ConsentModal;
