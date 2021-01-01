import crypto from 'crypto';

export const hash = (key: string) => (s: string): string => crypto.createHmac('sha256', key).update(s).digest('hex');

export const genToken = (salt: string): string =>
  crypto.createHmac('sha256', salt).update(String(Math.random())).digest('hex');
