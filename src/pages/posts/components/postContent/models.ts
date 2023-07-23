import { HelloModel } from '../../../../models/helloModel';

export interface PostContentProps extends HelloModel {
  title: string;
  body: string;
  name: string;
}
