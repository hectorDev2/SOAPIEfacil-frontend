"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useApp } from '../../../context/AppContext';
import { SoapieNote } from '../../../types';

const SoapiePage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { getNoteById, saveNote } = useApp();
  const [editedNote, setEditedNote] = useState<SoapieNote | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>('subjective');

  const handleToggleSection = (key: string) => {
    setOpenSection(prev => prev === key ? null : key);
  };

  useEffect(() => {
    if (params?.id) {
      const note = getNoteById(params.id as string);
      if (note) {
        setEditedNote(note);
      } else {
        router.push('/home'); // Redirect if not found
      }
    }
  }, [params?.id, getNoteById, router]);

  if (!editedNote) return null;

  const sections = [
    { key: 'subjective', title: 'Subjetivo', color: 'blue' },
    { key: 'objective', title: 'Objetivo', color: 'amber' },
    { key: 'analysis', title: 'Análisis', color: 'purple' },
    { key: 'plan', title: 'Plan', color: 'rose' },
    { key: 'intervention', title: 'Intervención', color: 'cyan' },
    { key: 'evaluation', title: 'Evaluación', color: 'teal' },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, string> = {
      blue: 'bg-blue-900/30 text-blue-400',
      amber: 'bg-amber-900/30 text-amber-400',
      purple: 'bg-purple-900/30 text-purple-400',
      rose: 'bg-rose-900/30 text-rose-400',
      cyan: 'bg-cyan-900/30 text-cyan-400',
      teal: 'bg-teal-900/30 text-teal-400',
    };
    return map[color] || '';
  };

  const handleUpdateField = (key: keyof SoapieNote, value: string) => {
    setEditedNote(prev => prev ? ({ ...prev, [key]: value }) : null);
  };



  return (
    <div className="flex-1 flex flex-col bg-background-dark animate-in fade-in duration-300 h-screen">
      <header className="sticky top-0 z-50 flex items-center bg-background-dark/90 backdrop-blur-md p-4 border-b border-white/5">
        <button 
          onClick={() => router.back()}
          className="flex size-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors text-slate-300 mr-2"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex-1 min-w-0">
          <h2 className="text-white text-lg font-bold truncate">{editedNote.patientName}</h2>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-tight">{editedNote.location}</p>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center justify-center size-10 rounded-full transition-colors ${isEditing ? 'text-primary bg-primary/10' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined">{isEditing ? 'done_all' : 'edit_note'}</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col px-4 py-6 gap-4 pb-28 overflow-y-auto no-scrollbar">
        {sections.map((section) => {
          const isOpen = openSection === section.key;
          return (
            <div 
              key={section.key} 
              className={`flex flex-col rounded-2xl bg-surface-dark border transition-all overflow-hidden ${isOpen ? 'border-primary/50 shadow-lg shadow-primary/5' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => handleToggleSection(section.key)}
                className="flex items-center gap-3 p-4 w-full text-left active:bg-white/5 transition-colors"
              >
                <div className={`flex items-center justify-center size-8 rounded-lg font-bold text-sm ${getColorClasses(section.color)}`}>
                  {section.key.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-white text-base font-bold flex-1">{section.title}</h3>
                <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
                  keyboard_arrow_down
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 pt-0 border-t border-white/5">
                  {isEditing ? (
                    <textarea 
                      className="w-full mt-4 bg-black/20 border-white/10 rounded-xl text-slate-300 text-sm focus:ring-primary focus:border-primary p-3 min-h-[120px]"
                      value={editedNote[section.key as keyof SoapieNote] as string}
                      onChange={(e) => handleUpdateField(section.key as keyof SoapieNote, e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      {editedNote[section.key as keyof SoapieNote] as string || <span className="italic text-slate-600">Sin contenido...</span>}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </main>

      <footer className="fixed bottom-0 z-50 w-full max-w-md bg-background-dark/95 backdrop-blur-md p-4 border-t border-white/5">
        <div className="flex gap-3">
          <button 
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-dark border border-white/10 text-slate-400 hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined">share</span>
          </button>
          <button 
            onClick={() => saveNote(editedNote)}
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all text-background-dark text-base font-bold shadow-lg shadow-primary/20"
          >
            Confirmar Nota
            <span className="material-symbols-outlined ml-2 text-[20px]">check_circle</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SoapiePage;
