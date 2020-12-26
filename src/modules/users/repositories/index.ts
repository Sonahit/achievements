import { User } from '../entities/user.entity';
import { UserRepository } from './impl/user.repository';

const userRepository = new UserRepository(User);

export { userRepository };
