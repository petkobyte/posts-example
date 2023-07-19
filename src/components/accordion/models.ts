import { ReactNode } from 'react';
import { HelloModel } from '../../models.ts/helloModel';

export interface AccordionProps extends HelloModel {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
