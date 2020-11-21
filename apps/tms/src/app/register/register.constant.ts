export const USERNAME_REGEX = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
export const PASSWORD_REGEX =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$';
export const PAN_CARD_REGEX = '([A-Z]){5}([0-9]){4}([A-Z]){1}$';
export const MOBILE_NUMBER_REGEX = '^[0-9]{10}$';
