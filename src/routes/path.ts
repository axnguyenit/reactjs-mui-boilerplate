function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/sign-in'),
  register: path(ROOTS_AUTH, '/sign-up'),
  verify: path(ROOTS_AUTH, '/verify'),
  forgotPassword: path(ROOTS_AUTH, '/forgot-password'),
};
