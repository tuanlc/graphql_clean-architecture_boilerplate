import { CreateUserDTO, PublicUserDTO } from '../dto/user.dto';

export default interface UserRepositoryInterface {
  getUserById(id: string): Promise<PublicUserDTO | undefined>;

  authenticateUser(email: string, password: string): Promise<PublicUserDTO | undefined>;

  createUser(data: CreateUserDTO): Promise<PublicUserDTO>;
}
