import { ReactNode } from 'react';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
