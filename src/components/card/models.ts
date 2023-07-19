import { HelloModel } from '../../models.ts/helloModel';

export interface CardProps extends HelloModel {
  children?: React.ReactNode;
}
