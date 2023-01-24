const PRIMARY_NAME = new Set(['A', 'N', 'H', 'L', 'Q', '9', '8']);
const INFO_NAME = new Set(['F', 'G', 'T', 'I', 'J', '1', '2', '3']);
const SUCCESS_NAME = new Set(['K', 'D', 'Y', 'B', 'O', '4', '5']);
const WARNING_NAME = new Set(['P', 'E', 'R', 'S', 'C', 'U', '6', '7']);
const ERROR_NAME = new Set(['V', 'W', 'X', 'M', 'Z']);

function getFirstCharacter(name: string) {
  return name && name.charAt(0).toUpperCase();
}

type ColorType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

function getAvatarColor(name: string): ColorType {
  if (PRIMARY_NAME.has(getFirstCharacter(name))) {
    return 'primary';
  }

  if (INFO_NAME.has(getFirstCharacter(name))) {
    return 'info';
  }

  if (SUCCESS_NAME.has(getFirstCharacter(name))) {
    return 'success';
  }

  if (WARNING_NAME.has(getFirstCharacter(name))) {
    return 'warning';
  }

  if (ERROR_NAME.has(getFirstCharacter(name))) {
    return 'warning';
  }

  return 'default';
}

export default function createAvatar(name: string) {
  return {
    name: getFirstCharacter(name),
    color: getAvatarColor(name),
  };
}
