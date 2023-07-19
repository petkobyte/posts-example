import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/users';
import { UserModel } from '../../models/userModel';
import { AxiosError } from 'axios';

export const useGetUser = (userId: number) => {
  const { isLoading, error, data, refetch, fetchStatus }: UseQueryResult<UserModel, AxiosError> =
    useQuery({
      queryKey: [`USER_${userId}`],
      queryFn: () => getUser(userId),
      enabled: false,
    });

  return { isLoading: isLoading && fetchStatus !== 'idle', error, data, refetch };
};
