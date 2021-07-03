import { asClass, AwilixContainer } from 'awilix';
import AuthRepository from '../../persistence/auth.repository';
import AuthService from '../../services/auth.service';

import ICradle from '../icradle.interface';

export interface IAuthProvider {
  authRepository: AuthRepository;
  authService: AuthService;
}

const authProvider = (container: AwilixContainer<ICradle>): void => {
  // Register the classes
  container.register({
    authRepository: asClass(AuthRepository),
    authService: asClass(AuthService),
  });
};

export default authProvider;
