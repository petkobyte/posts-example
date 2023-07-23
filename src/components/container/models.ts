import { HelloModel } from '../../models/helloModel';

export interface ContainerProps extends HelloModel {
  children?: React.ReactNode;
}
