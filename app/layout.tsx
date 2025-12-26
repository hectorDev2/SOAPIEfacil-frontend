import type { Metadata } from 'next';
import Script from 'next/script';
import { AppProvider } from '../context/AppContext';
import Overlays from '../components/Overlays';
import './globals.css';

export const metadata: Metadata = {
  title: 'SOAPIEfacil | Clinical Documentation',
  description: 'Herramienta de documentación clínica',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="antialiased selection:bg-primary/30">

        <AppProvider>
          <div className="max-w-md mx-auto min-h-screen bg-background-dark shadow-2xl relative overflow-hidden flex flex-col font-display">
             {children}
             <Overlays />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
