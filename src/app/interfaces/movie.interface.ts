export interface Movie {
  title: string;
  description: string;
  duration: string;
  age: string;
  approval: string;
  provider: 'netflix' | 'claro' | 'prime' | 'ittv' | 'appletv';
  providerLabel: string;
  isTop10?: boolean;
}