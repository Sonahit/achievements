import { userRepository } from '@src/modules/users/repositories';
import { FastifyInstance } from 'fastify';
import createHttpError from 'http-errors';
import { genToken } from '../../auth.utils';
import { TokenResponse } from '../../domain/token-response';
import { SignInDto } from './sign-in.dto';

export async function signIn(this: FastifyInstance, signInDto: SignInDto): Promise<TokenResponse> {
  const { login, password } = signInDto;

  const user = await userRepository.query().findOne({
    login,
  });
  const { hash } = this;

  if (hash(password) === user.password) {
    user.token = genToken(hash(password));
    await userRepository.query().update(user);
    return {
      token: user.token,
      type: 'Basic',
    };
  }

  throw new createHttpError['400']('Password or Login doesnt match');
}
