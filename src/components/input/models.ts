import { ChangeEvent } from 'react';
import { HelloModel } from '../../models/helloModel';

export interface InputProps extends HelloModel {
  type: 'text' | 'number' | 'email' | 'password';
  value: string | number;
  placeholder: string;
  name: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
