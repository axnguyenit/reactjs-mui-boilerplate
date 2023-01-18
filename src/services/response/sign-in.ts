import { User } from '../models';

export type SignInResponse = {
  accessToken: string;
  user: User;
};
