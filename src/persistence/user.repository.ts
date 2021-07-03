import { v4 as uuidV4 } from 'uuid';
import { CreateUserDTO, PublicUserDTO } from '../dto/user.dto';
import UserRepositoryInterface from '../services/user.repository.interface';
import { checkPassword, hashPassword } from './password';
import UserEntity from '../entities/user.entity';

const users: UserEntity[] = [];

export default class UserRepository implements UserRepositoryInterface {
  async getUserById(id: string): Promise<PublicUserDTO | undefined> {
    const user = users.find((item) => item.id === id);

    if (!user) return;

    return this.normalizeUser(user);
  }

  async authenticateUser(email: string, password: string): Promise<PublicUserDTO | undefined> {
    const user = users.find((item) => item.email === email);

    if (!user) return;

    const isCorrectPassword = await checkPassword(password, user.password);

    if (!isCorrectPassword) return;

    return this.normalizeUser(user);
  }

  async createUser(data: CreateUserDTO): Promise<PublicUserDTO> {
    const userToCreate = {
      id: uuidV4(),
      email: data.email,
      name: data.name,
      password: await hashPassword(data.password),
    };

    await users.push(userToCreate);

    return this.normalizeUser(userToCreate);
  }

  normalizeUser(rawUser: UserEntity): PublicUserDTO {
    return {
      id: rawUser.id,
      email: rawUser.email,
      name: rawUser.name,
    };
  }
}
