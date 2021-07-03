import { AuthenticatedUserDTO, PublicUserDTO } from '../dto/user.dto';

export default interface AuthRepositoryInterface {
  getAuthenticatedUserByToken(token: string): Promise<AuthenticatedUserDTO | undefined>;

  generateToken(user: PublicUserDTO): Promise<string>;
}
