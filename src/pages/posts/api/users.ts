import { UserModel } from '../models/userModel';
import { httpClient } from '../../../utils/httpClient';

export const getUsers = async (): Promise<UserModel[]> => {
  const response = await httpClient.get<UserModel[]>(`/users`);
  return response.data;
};

export const getUser = async (userId: number): Promise<UserModel> => {
  const response = await httpClient.get<UserModel>(`/users/${userId}`);
  return response.data;
};
