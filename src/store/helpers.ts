import { AnyAction } from '@reduxjs/toolkit';

export const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

export const isPending = (action: AnyAction) => {
  return action.type.endsWith('pending');
};

export const isFulfilled = (action: AnyAction) => {
  return action.type.endsWith('fulfilled');
};
