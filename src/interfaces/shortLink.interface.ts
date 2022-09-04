import { ValidationError } from './auth.interface';

export interface IShortLink {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface UnauthorizedError {
  detail: string;
}

export type ShorkLinkResponse =
  | IShortLink[]
  | UnauthorizedError
  | ValidationError;
