"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../context/AppContext';
import { SoapieNote } from '../../types';

const HomePage: React.FC = () => {
  const router = useRouter();
  const { user, history, startRecording, deleteNote } = useApp();

  const handleViewNote = (note: SoapieNote) => {
    router.push(`/note/${note.id}`);
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Dynamic Header */}
      <header className="flex items-center justify-between px-6 pt-12 pb-6 sticky top-0 bg-background-dark/80 backdrop-blur-xl z-30">
        <div className="flex flex-col">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Status: Conectado</p>
          <h2 className="text-white text-2xl font-extrabold tracking-tight">Hola, {user.name.split(' ')[0]}</h2>
        </div>
        <button 
          onClick={handleProfile}
          className="h-12 w-12 rounded-2xl overflow-hidden border-2 border-primary/20 bg-surface-dark flex items-center justify-center hover:border-primary transition-all duration-300"
        >
          <img src={user.photoUrl} className="w-full h-full object-cover" alt="Profile" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
        {/* Decorative Grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #2dd4bf 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative group">
          {/* Animated glow effects */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-all duration-700 animate-pulse"></div>
          
          <button 
            onClick={startRecording}
            className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-surface-dark to-black border border-white/5 flex flex-col items-center justify-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <div className="absolute inset-2 rounded-full border border-white/5 pointer-events-none group-hover:border-primary/20 transition-colors"></div>
            <span className="material-symbols-outlined text-7xl text-primary group-hover:scale-110 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
            <span className="mt-4 text-white font-bold tracking-tight text-xl">NUEVA NOTA</span>
            <div className="mt-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-[10px] font-black uppercase">Escuchar IA</span>
            </div>
          </button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Reconocimiento de voz listo
          </p>
        </div>
      </main>

      {/* History Sheet style Next.js */}
      <section className="bg-surface-dark/90 backdrop-blur-2xl border-t border-white/5 pb-10 pt-4 rounded-t-[40px] z-20 flex flex-col max-h-[40vh] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-16 h-1.5 rounded-full bg-white/10 mx-auto mb-6"></div>
        <div className="px-8 flex items-center justify-between mb-4">
          <h3 className="text-white text-sm font-bold tracking-tight">Actividad Reciente</h3>
          <button className="text-primary text-xs font-bold hover:underline">Ver todo</button>
        </div>
        
        <div className="flex-1 px-6 overflow-y-auto no-scrollbar space-y-3">
          {history.length === 0 ? (
            <div className="py-12 flex flex-col items-center opacity-30">
              <span className="material-symbols-outlined text-4xl mb-2">history</span>
              <p className="text-xs font-bold">Sin registros</p>
            </div>
          ) : (
            history.map((note) => (
              <div 
                key={note.id}
                className="flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 p-4 rounded-3xl transition-all cursor-pointer group"
                onClick={() => handleViewNote(note)}
              >
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-symbols-outlined">notes</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-sm font-bold truncate">{note.patientName}</h4>
                  <p className="text-slate-500 text-xs font-medium">{note.location} • {note.timestamp}</p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
                  className="size-8 rounded-full flex items-center justify-center text-slate-600 hover:text-red-400 hover:bg-red-400/10 transition-all"
                >
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
