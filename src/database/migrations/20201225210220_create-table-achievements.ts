import { ConditionTypes } from '@src/modules/achievements/domain/condition.types';
import * as Knex from 'knex';
import { Achievement } from '../../modules/achievements/entities/achievement.entity';

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(Achievement.tableName, (t) => {
    t.increments('id');
    t.string('name');
    t.enum('type', ['count-based', 'simple'] as ConditionTypes[]);
    t.jsonb('state');
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTableIfExists(Achievement.tableName);
}
