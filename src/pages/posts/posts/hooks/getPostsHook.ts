import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getPosts } from '../../api/posts';
import { PostModel } from '../../models/postModel';
import { AxiosError } from 'axios';

export const useGetPosts = () => {
  const { isLoading, error, data }: UseQueryResult<PostModel[], AxiosError> = useQuery({
    queryKey: ['POSTS'],
    queryFn: getPosts,
  });

  return { isLoading, error, data };
};
