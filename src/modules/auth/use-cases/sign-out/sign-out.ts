import { User } from '@src/modules/users/entities/user.entity';
import { userRepository } from '@src/modules/users/repositories';

export const signOut = async (user: User): Promise<void> => {
  await userRepository.query().update({ id: user.id, token: null });
};
