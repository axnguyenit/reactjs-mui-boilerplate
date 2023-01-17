import { AppRole } from './app-role';

export type User = {
  id: string;
  email: string;
  username: string;
  role: AppRole;
};
