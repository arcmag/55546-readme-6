export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged',
  LoggedError: 'Password or Login is wrong',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created',
  UserPasswordWrong: 'User password is wrong',
  JwtAuthSuccess: 'Successful user authorization with jwt',
  JwtAuthError: 'Failed user authorization with jwt',
  GetNewTokens: 'Get a new access/refresh tokens',
  TokenCreatedError: 'Error upon creating user token',
  BadMongoIdError: 'Bad entity mongo ID',
  GettingUsersById: 'getting a list of users by ID',
  GettingPublishersList: 'getting a list of publishers the current user is subscribed to',
} as const;

export const ParamDescription = {
  UserId: 'User ID',
} as const;

export const AuthenticationValidateMessage = {
  EmailNotValid: 'The email is not valid',
} as const;

export const NameLength = {
  Min: 3,
  Max: 50
};

export const PasswordLength = {
  Min: 6,
  Max: 12
};

export const AVATAR_MAX_SIZE = 500000;

export const AVATAR_AVAILABLE_TYPES = /(jpe?g|png)/;
