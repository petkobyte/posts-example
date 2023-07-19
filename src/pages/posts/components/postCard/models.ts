import { HelloModel } from '../../../../models.ts/helloModel';
import { PostModel } from '../../models/postModel';

export interface PostCardProps extends HelloModel {
  post: PostModel;
  userName: string;
}
