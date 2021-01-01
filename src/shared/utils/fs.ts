import requireAll from 'require-all';
import match from 'minimatch';

export const requireFiles = <T = any>(dirname: string, filterFiles?: string[]): { [key: string]: T } => {
  return requireAll({
    dirname,
    filter: (name) => {
      return filterFiles && filterFiles.some((v) => match(v, name)) ? name : false;
    },
  });
};

export const requireSchemas = (dirname: string, filterFiles?: string[]): { [key: string]: Record<string, any> } => {
  return requireAll({
    dirname,
    filter: (name) => {
      return filterFiles && filterFiles.some((v) => match(v, name)) ? false : name;
    },
    resolve: (module: { schema: Record<string, any> }) => {
      return module.schema;
    },
  });
};
