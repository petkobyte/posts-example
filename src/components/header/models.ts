import { HelloModel } from '../../models.ts/helloModel';

export interface HeaderProps extends HelloModel {
  title: string | React.ReactNode;
}
