import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostModel } from '../../models/postModel';
import { getPost } from '../../api/posts';

export const useGetPost = (postId: number) => {
  const { isLoading, error, data, refetch, fetchStatus }: UseQueryResult<PostModel, AxiosError> =
    useQuery({
      queryKey: [`POST_${postId}`],
      queryFn: () => getPost(postId),
      enabled: false,
    });

  return { isLoading: isLoading && fetchStatus !== 'idle', error, data, refetch };
};
