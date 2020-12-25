import * as Knex from 'knex';
import { User } from '../../modules/users/entities/user.entity';

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(User.tableName, (t) => {
    t.increments('id');
    t.string('name');
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropSchemaIfExists(User.tableName);
}
