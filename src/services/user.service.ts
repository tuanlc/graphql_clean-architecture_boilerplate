import { AuthenticatedUserDTO, CreateUserDTO, PublicUserDTO } from '../dto/user.dto';
import AuthRepositoryInterface from './auth.repository.interface';
import UserRepositoryInterface from './user.repository.interface';

export default class UserService {
  constructor(private userRepository: UserRepositoryInterface, private authRepository: AuthRepositoryInterface) {}

  getUserById(userId: string): Promise<PublicUserDTO | undefined> {
    return this.userRepository.getUserById(userId);
  }

  async register(data: CreateUserDTO): Promise<AuthenticatedUserDTO> {
    const createdUser = await this.userRepository.createUser(data);

    const token = await this.authRepository.generateToken(createdUser);

    return {
      ...createdUser,
      token,
    };
  }
}
