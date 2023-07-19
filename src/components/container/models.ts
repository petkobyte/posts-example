import { HelloModel } from '../../models.ts/helloModel';

export interface ContainerProps extends HelloModel {
  children?: React.ReactNode;
}
