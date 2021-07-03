import { AuthenticatedUserDTO, PublicUserDTO } from '../dto/user.dto';
import AuthRepositoryInterface from '../services/auth.repository.interface';
import {
  JsonWebTokenError,
  NotBeforeError,
  sign as signJWT,
  TokenExpiredError,
  verify as verifyJWT,
} from 'jsonwebtoken';
import { AUTHENTICATED_USER_TOKEN_TTL, JWT_SECRET_KEY } from './constants';

export default class AuthRepository implements AuthRepositoryInterface {
  async getAuthenticatedUserByToken(token: string): Promise<AuthenticatedUserDTO | undefined> {
    try {
      const decodedData = verifyJWT(token, JWT_SECRET_KEY);
      const { id, email, name } = decodedData as PublicUserDTO;

      if (!id || !email) {
        return;
      }

      return {
        id,
        email,
        name,
        token,
      };
    } catch (err) {
      if (err instanceof TokenExpiredError || err instanceof JsonWebTokenError || err instanceof NotBeforeError) {
        return;
      }

      throw err;
    }
  }

  async generateToken(user: PublicUserDTO): Promise<string> {
    return signJWT(user, JWT_SECRET_KEY, { expiresIn: AUTHENTICATED_USER_TOKEN_TTL });
  }
}
