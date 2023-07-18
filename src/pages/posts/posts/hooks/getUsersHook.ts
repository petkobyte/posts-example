import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import { UserModel } from '../../models/userModel';
import { getUsers } from '../../api/users';

export const useGetUsers = () => {
  const { isLoading, error, data }: UseQueryResult<UserModel[], AxiosError> = useQuery({
    queryKey: ['USERS'],
    queryFn: getUsers,
  });

  return { isLoading, error, data };
};
