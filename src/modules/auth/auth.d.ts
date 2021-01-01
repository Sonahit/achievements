import 'fastify';
import { User } from '../users/entities/user.entity';

declare module 'fastify' {
  export interface FastifyInstance {
    hash: (s: strins) => string;
    authorization: (req: FastifyRequest) => void;
  }
  export interface FastifyRequest {
    user?: User;
  }
}
