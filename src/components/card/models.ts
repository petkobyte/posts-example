import { HelloModel } from '../../models/helloModel';

export interface CardProps extends HelloModel {
  children?: React.ReactNode;
}
