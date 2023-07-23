import { HelloModel } from '../../../../models/helloModel';

export interface CommentsProps extends HelloModel {
  postId: number;
}
