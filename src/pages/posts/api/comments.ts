import { httpClient } from '../../../utils/httpClient';
import { CommentModel } from '../models/commentModel';

export const getComments = async (postId: number): Promise<CommentModel[]> => {
  const response = await httpClient.get<CommentModel[]>(`/posts/${postId}/comments`);
  return response.data;
};
