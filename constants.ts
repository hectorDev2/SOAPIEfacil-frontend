
import { UserProfile, SoapieNote } from './types';

export const INITIAL_USER: UserProfile = {
  name: "Ana Martínez",
  role: "Interno Rotativo",
  institution: "Universidad Central",
  email: "ana.martinez@med.edu",
  idNumber: "17584930-K",
  clinicSite: "Hosp. San José - Urgencias",
  photoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcLZhBcb4JUigRednOHiOiCVKsiAzkxUVtyCYQU74Wy0kRuBJEFFNXo9jGcyQwInShEoU_WBBs4BQGawtpFHmr_jb_wzJjYsEm8H9zNPSEpGNFSrzqoaSYI-lshNOP6J6MlFxcNIQ_ippUdJPrMKtmmlUjp6ZMgCFDyCpt1EHgeafRXwtQt1XP98z1ylbhma18MnSaFJrICK1DQaIA6iup24hoyK6Ai99fCTMIil9_LxHdcWqfY_OhOzn94KYPVQZJ5P6zyZETohg"
};

export const MOCK_HISTORY: SoapieNote[] = [
  {
    id: '482',
    patientName: 'Juan Pérez',
    patientId: '849302',
    location: 'Cama 4 - Traumatología',
    timestamp: 'Hoy, 14:30 PM',
    subjective: 'Paciente reporta molestia leve en el abdomen inferior, especialmente al moverse. Refiere una escala de dolor de 4/10. Indica que ha tolerado bien los líquidos orales.',
    objective: 'TA: 120/80 mmHg, FC: 72 lpm, FR: 18 rpm, T: 36.8°C. Abdomen blando, depresible, doloroso a la palpación profunda en hipogastrio. Herida quirúrgica limpia, seca, sin signos de infección.',
    analysis: 'Evolución post-operatoria satisfactoria. El dolor es esperable y está siendo manejado. Hemodinamia estable.',
    plan: 'Continuar con analgesia según horario. Fomentar deambulación asistida. Control de signos vitales cada 4 horas.',
    intervention: 'Administración de Paracetamol 1g IV a las 14:00. Curación de herida operatoria con técnica aséptica.',
    evaluation: 'Paciente refiere disminución del dolor a 2/10 tras 30 minutos de la administración del analgésico. Se observa tranquilo.'
  },
  {
    id: '480',
    patientName: 'María García',
    patientId: '772103',
    location: 'Cama 2 - Medicina Interna',
    timestamp: 'Hoy, 11:15 AM',
    subjective: 'Paciente se siente más fuerte hoy.',
    objective: 'Signos estables.',
    analysis: 'Estable.',
    plan: 'Observación.',
    intervention: 'Control.',
    evaluation: 'Positiva.'
  }
];
