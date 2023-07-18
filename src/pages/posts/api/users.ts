import axios from 'axios';
import { UserModel } from '../models/userModel';
import { httpClient } from '../../../utils/httpClient';

export const getUsers = async (): Promise<UserModel[]> => {
  const response = await httpClient.get<UserModel[]>(`/users`);
  return response.data;
};
