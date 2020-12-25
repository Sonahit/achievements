import { requireSchemas } from '../../../shared/utils/fs';

export const schemas = requireSchemas(`${__dirname}`, ['index.ts']);
