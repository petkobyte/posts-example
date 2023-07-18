import { PostModel } from '../models/postModel';
import { httpClient } from '../../../utils/httpClient';

export const getPosts = async (): Promise<PostModel[]> => {
  const response = await httpClient.get<PostModel[]>(`/posts`);
  return response.data;
};
