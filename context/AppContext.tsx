"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SoapieNote, UserProfile } from '../types';
import { INITIAL_USER, MOCK_HISTORY } from '../constants';
import { useRouter } from 'next/navigation';

interface AppContextType {
  user: UserProfile;
  history: SoapieNote[];
  isRecording: boolean;
  showConsent: boolean;
  setShowConsent: (show: boolean) => void;
  startRecording: () => void;
  confirmRecording: () => void;
  saveNote: (note: SoapieNote) => void;
  deleteNote: (id: string) => void;
  getNoteById: (id: string) => SoapieNote | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile>(INITIAL_USER);
  const [history, setHistory] = useState<SoapieNote[]>([]);
  const [showConsent, setShowConsent] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Persistence
  useEffect(() => {
    const savedHistory = localStorage.getItem('soapie_history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    } else {
      setHistory(MOCK_HISTORY);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('soapie_history', JSON.stringify(history));
    }
  }, [history, isLoaded]);

  const startRecording = () => {
    setShowConsent(true);
  };

  const confirmRecording = () => {
    setShowConsent(false);
    setIsRecording(true);
    
    // Simulate Gemini AI Processing delay
    setTimeout(() => {
      setIsRecording(false);
      const newNote: SoapieNote = {
        ...MOCK_HISTORY[0], // Using mock data as template
        id: `NEW-${Date.now()}`,
        timestamp: 'Generado ahora',
        patientName: 'Paciente Nuevo'
      };
      setHistory(prev => [newNote, ...prev]);
      router.push(`/note/${newNote.id}`);
    }, 3500);
  };

  const saveNote = (updatedNote: SoapieNote) => {
    setHistory(prev => prev.map(n => n.id === updatedNote.id ? updatedNote : n));
    router.push('/home');
  };

  const deleteNote = (id: string) => {
    setHistory(prev => prev.filter(n => n.id !== id));
  };

  const getNoteById = (id: string) => {
    return history.find(n => n.id === id);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#00d2ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AppContext.Provider value={{
      user,
      history,
      isRecording,
      showConsent,
      setShowConsent,
      startRecording,
      confirmRecording,
      saveNote,
      deleteNote,
      getNoteById
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
