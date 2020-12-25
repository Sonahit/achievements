import * as Knex from 'knex';
import { Achievement } from '../../modules/achievements/entities/achievement.entity';

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(Achievement.tableName, (t) => {
    t.increments('id');
    t.string('name');
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropSchemaIfExists(Achievement.tableName);
}
