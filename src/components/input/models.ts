import { ChangeEvent } from 'react';

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  value: string | number;
  placeholder: string;
  name: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
