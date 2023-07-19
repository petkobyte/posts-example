import { HelloModel } from '../../../../models.ts/helloModel';

export interface PostContentProps extends HelloModel {
  title: string;
  body: string;
  name: string;
}
