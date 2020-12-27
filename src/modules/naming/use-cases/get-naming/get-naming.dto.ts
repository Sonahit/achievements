import { StringReturningMethod } from 'objection';

export interface GetNamingDto {
  prefix: string;
  action: string;
  highContext: string;
  lowContext: string;
}
