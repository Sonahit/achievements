import { UserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

export const toDto = (user: User): UserDto => {
  return {
    id: user.id,
    name: user.name,
  };
};
