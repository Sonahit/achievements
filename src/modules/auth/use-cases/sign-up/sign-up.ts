import { User } from '@src/modules/users/entities/user.entity';
import { userRepository } from '@src/modules/users/repositories';
import { FastifyInstance } from 'fastify';
import createHttpError from 'http-errors';
import { genToken } from '../../auth.utils';
import { TokenResponse } from '../../domain/token-response';
import { SignUpDto } from './sign-up.dto';

export async function signUp(this: FastifyInstance, signUpDto: SignUpDto): Promise<TokenResponse> {
  const { password, confirmPassword, login } = signUpDto;

  if (password !== confirmPassword) {
    throw new createHttpError['422']('Confirm password doesnt match password');
  }

  let user = await userRepository.query().findOne({
    login,
  });

  if (user) {
    throw new createHttpError['400']('User exists');
  }

  const { hash } = this;

  user = await userRepository.query().insert({
    login,
    name: signUpDto.name,
    password: hash(password),
  });

  const token = genToken(password);

  await userRepository.query().update({
    id: user.id,
    token,
  });

  return {
    token,
    type: 'Basic',
  };
}
