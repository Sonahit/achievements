import { userRepository } from '@src/modules/users/repositories';
import { FastifyInstance, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import createHttpError from 'http-errors';

const auth = (fastify: FastifyInstance, _: any, done: (err?: Error) => void) => {
  fastify.log.info('Registered auth plugin');
  fastify.decorate('authorization', async (req: FastifyRequest) => {
    const auth = req.headers['authorization'];
    const user = await userRepository.findOne({ token: auth });

    if (!user) {
      throw new createHttpError[401]();
    }
    req.user = user;
  });
  done();
};

export default fp(auth, {
  name: 'auth',
});
