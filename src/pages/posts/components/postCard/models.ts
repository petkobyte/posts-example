import { HelloModel } from '../../../../models/helloModel';
import { PostModel } from '../../models/postModel';

export interface PostCardProps extends HelloModel {
  post: PostModel;
  userName: string;
  onClick?: (post: PostModel, userName: string) => void;
}
