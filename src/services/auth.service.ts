import { AuthenticatedUserDTO } from '../dto/user.dto';
import AuthRepositoryInterface from './auth.repository.interface';
import UserRepositoryInterface from './user.repository.interface';

export default class AuthService {
  constructor(private authRepository: AuthRepositoryInterface, private userRepository: UserRepositoryInterface) {}

  async authenticateUser(email: string, password: string): Promise<AuthenticatedUserDTO | undefined> {
    const authenticatedUser = await this.userRepository.authenticateUser(email, password);

    if (!authenticatedUser) return;

    const token = await this.authRepository.generateToken(authenticatedUser);

    return {
      ...authenticatedUser,
      token,
    };
  }

  async authenticateUserByToken(token: string): Promise<AuthenticatedUserDTO | undefined> {
    return this.authRepository.getAuthenticatedUserByToken(token);
  }
}
