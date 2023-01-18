import { AppRole } from './app-role';

export type User = {
  id: string;
  email: string;
  fullName: string;
  role: AppRole;
};
