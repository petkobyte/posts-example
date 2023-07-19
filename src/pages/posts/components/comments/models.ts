import { HelloModel } from '../../../../models.ts/helloModel';

export interface CommentsProps extends HelloModel {
  postId: number;
}
