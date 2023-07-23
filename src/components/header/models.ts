import { HelloModel } from '../../models/helloModel';

export interface HeaderProps extends HelloModel {
  title: string | React.ReactNode;
}
