const imageWithName = (path: string): string => `/assets/images/${path}`;

export const APP_IMAGES = {
  logo: imageWithName('logo.png'),
  jwtIcon: imageWithName('jwt-icon.png'),
  signIn: imageWithName('sign-in.png'),
};
