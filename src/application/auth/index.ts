import container from '../../IoC/container';

export interface IContext {
  token?: string;
}

export async function authenticateContext(context: IContext): Promise<GQL.User> {
  if (!context.token) {
    throw new Error('user is not logged in');
  }
  const user = await container.cradle.authService.authenticateUserByToken(context.token);
  if (!user) {
    throw new Error('invalid token');
  }
  return user;
}
