
export enum Screen {
  WELCOME = 'welcome',
  HOME = 'home',
  NOTE_VIEW = 'note_view',
  PROFILE = 'profile',
}

export interface SoapieNote {
  id: string;
  patientName: string;
  patientId: string;
  location: string;
  timestamp: string;
  subjective: string;
  objective: string;
  analysis: string;
  plan: string;
  intervention: string;
  evaluation: string;
}

export interface UserProfile {
  name: string;
  role: string;
  institution: string;
  email: string;
  idNumber: string;
  clinicSite: string;
  photoUrl: string;
}
