import { IAuthProvider } from './providers/auth.provider';
import { IUserProvider } from './providers/user.provider';

export default interface ICradle extends IAuthProvider, IUserProvider {}
