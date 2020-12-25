import { FastifyInstance } from 'fastify';

export abstract class Service {
  constructor(protected fastify: FastifyInstance) {}
}
