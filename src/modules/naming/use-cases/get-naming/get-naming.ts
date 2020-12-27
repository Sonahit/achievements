import { GetNamingDto } from './get-naming.dto';

export const getNaming = (): GetNamingDto => {
  return {
    prefix: '',
    action: '',
    highContext: '',
    lowContext: '',
  };
};
