import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { HelloModel } from '../../models/helloModel';

export interface LoadingProps extends HelloModel {
  color?: 'dark' | 'light';
  size: SizeProp;
  text?: string;
}
