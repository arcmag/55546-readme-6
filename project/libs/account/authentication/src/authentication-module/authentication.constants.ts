export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
  UserPasswordWrong: 'User password is wrong',
  JwtAuthSuccess: 'Successful user authorization with jwt',
  JwtAuthError: 'Failed user authorization with jwt',
  GetNewTokens: 'Get a new access/refresh tokens',
} as const;

export const AuthenticationValidateMessage = {
  EmailNotValid: 'The email is not valid',
} as const;

