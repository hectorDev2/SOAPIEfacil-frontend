"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../context/AppContext';

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { user } = useApp();

  return (
    <div className="flex-1 flex flex-col bg-background-dark min-h-screen">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-dark/95 backdrop-blur-sm">
        <div 
          onClick={() => router.back()}
          className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer transition-colors hover:text-primary"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Perfil de Usuario</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-white gap-2 min-w-0 p-0 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[24px]">settings</span>
          </button>
        </div>
      </div>

      <div className="h-2"></div>
      
      <div className="flex p-4 flex-col items-center">
        <div className="flex gap-4 flex-col items-center">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full border-4 border-surface-dark shadow-lg h-32 w-32 relative" 
            style={{ backgroundImage: `url("${user.photoUrl}")` }}
          >
            <div className="absolute bottom-1 right-1 bg-primary text-background-dark rounded-full p-1.5 border-[3px] border-background-dark flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] font-bold">edit</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-[24px] font-extrabold leading-tight tracking-[-0.015em] text-center">{user.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 rounded-full bg-surface-dark border border-[#2e4349] text-primary text-xs font-bold uppercase tracking-wider">{user.role}</span>
            </div>
            <p className="text-text-secondary text-base font-normal leading-normal text-center mt-1">{user.institution}</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#2e4349] bg-surface-dark p-5 shadow-sm transition-all hover:border-primary/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="flex w-full items-center justify-between z-0">
            <div className="flex flex-col gap-1 pr-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">medical_services</span>
                <p className="text-white text-base font-bold leading-tight">Modo Interno</p>
              </div>
              <p className="text-text-secondary text-sm font-normal leading-normal mt-1">
                Optimiza el reconocimiento de voz para términos clínicos SOAPIE y abreviaturas médicas.
              </p>
            </div>
            <label className="relative flex h-[31px] w-[51px] shrink-0 cursor-pointer items-center rounded-full border-none bg-[#233236] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors duration-200">
              <div className="h-full w-[27px] rounded-full bg-white shadow-sm transition-all"></div>
              <input defaultChecked className="invisible absolute" type="checkbox"/>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-4">Información Personal</h3>
        <div className="flex flex-col gap-2 px-4">
          <ProfileItem icon="mail" label="Correo Electrónico" value={user.email} showEdit />
          <ProfileItem icon="badge" label="Número de ID" value={user.idNumber} />
          <ProfileItem icon="local_hospital" label="Sede Clínica" value={user.clinicSite} showMap />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-6 pb-2 pt-4">Seguridad</h3>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex items-center gap-4 bg-surface-dark px-4 py-3 rounded-xl justify-between border border-transparent hover:border-[#2e4349] transition-all">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-[#233236] shrink-0 size-10">
                <span className="material-symbols-outlined text-[20px]">face</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">Face ID</p>
                <p className="text-text-secondary text-xs font-normal">Acceso rápido seguro</p>
              </div>
            </div>
            <label className="relative flex h-[24px] w-[40px] cursor-pointer items-center rounded-full border-none bg-[#233236] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors">
              <div className="h-full w-[20px] rounded-full bg-white shadow-sm"></div>
              <input defaultChecked className="invisible absolute" type="checkbox"/>
            </label>
          </div>
          
          <div className="flex items-center gap-4 bg-surface-dark px-4 py-3 rounded-xl justify-between border border-transparent hover:border-[#2e4349] transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-[#233236] shrink-0 size-10">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal group-hover:text-primary transition-colors">Privacidad y Datos</p>
                <p className="text-text-secondary text-xs font-normal">Tus registros están encriptados</p>
              </div>
            </div>
            <div className="shrink-0 text-text-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4 px-4 flex flex-col items-center gap-4">
        <button className="w-full rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 py-3 text-base font-bold transition-colors border border-red-500/20">
          Cerrar Sesión
        </button>
        <p className="text-text-secondary text-xs font-medium">Versión 1.0.2 (Build 45)</p>
      </div>
    </div>
  );
};

const ProfileItem: React.FC<{icon: string, label: string, value: string, showEdit?: boolean, showMap?: boolean}> = ({icon, label, value, showEdit, showMap}) => (
  <div className="flex items-center gap-4 bg-surface-dark px-4 py-3 rounded-xl justify-between border border-transparent hover:border-[#2e4349] transition-all">
    <div className="flex items-center gap-4">
      <div className="text-primary flex items-center justify-center rounded-lg bg-[#233236] shrink-0 size-10">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-text-secondary text-xs font-medium uppercase tracking-wide">{label}</p>
        <p className="text-white text-base font-medium leading-normal line-clamp-1">{value}</p>
      </div>
    </div>
    {showEdit && <div className="shrink-0 text-text-secondary"><span className="material-symbols-outlined text-[20px]">edit</span></div>}
    {showMap && <div className="shrink-0 text-text-secondary"><span className="material-symbols-outlined text-[20px]">map</span></div>}
  </div>
);

export default ProfilePage;
