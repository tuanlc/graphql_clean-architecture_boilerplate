import { asClass, AwilixContainer } from 'awilix';
import UserRepository from '../../persistence/user.repository';
import UserService from '../../services/user.service';

import ICradle from '../icradle.interface';

export interface IUserProvider {
  userRepository: UserRepository;
  userService: UserService;
}

const userProvider = (container: AwilixContainer<ICradle>): void => {
  // Register the classes
  container.register({
    userRepository: asClass(UserRepository),
    userService: asClass(UserService),
  });
};

export default userProvider;
