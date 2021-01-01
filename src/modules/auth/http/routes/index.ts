import { User } from '@src/modules/users/entities/user.entity';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { signIn } from '../../use-cases/sign-in/sign-in';
import { SignInDto } from '../../use-cases/sign-in/sign-in.dto';
import { signInSchema } from '../../use-cases/sign-in/sign-in.schema';
import { signOut } from '../../use-cases/sign-out/sign-out';
import { signOutSchema } from '../../use-cases/sign-out/sign-out.schema';
import { signUp } from '../../use-cases/sign-up/sign-up';
import { SignUpDto } from '../../use-cases/sign-up/sign-up.dto';
import { signUpSchema } from '../../use-cases/sign-up/sign-up.schema';

const authRoutes = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify
    .post<{ Body: SignInDto }>(
      '/auth/signin',
      {
        schema: signInSchema,
      },
      async function (req) {
        return await signIn.bind(fastify)(req.body);
      },
    )
    .post<{ Body: SignUpDto }>(
      '/auth/signup',
      {
        schema: signUpSchema,
      },
      async function (req) {
        return await signUp.bind(fastify)(req.body);
      },
    )
    .post<{ Headers: { authorization: string } }>(
      '/auth/signout',
      {
        schema: signOutSchema,
        preHandler: [fastify.authorization],
      },
      async function (req) {
        return await signOut.bind(fastify)(req.user as User);
      },
    );

  fastify.log.info('Registered auth routes');
  done();
};

export default fp(authRoutes);
