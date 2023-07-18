import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import { UserModel } from '../../models/userModel';
import { getComments } from '../../api/comments';
import { CommentModel } from '../../models/commentModel';

export const useGetComments = (postId: number) => {
  const { isLoading, error, data, refetch }: UseQueryResult<CommentModel[], AxiosError> = useQuery({
    queryKey: ['COMMENTS'],
    queryFn: () => getComments(postId),
    enabled: false,
  });

  return { isLoading, error, data, refetch };
};
