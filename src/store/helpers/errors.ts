import { AxiosError } from 'axios';
import { API_STATUS } from 'src/constants';
import { ValidationError, UnauthorizedError } from 'src/interfaces';

export const errorToText = (error: AxiosError): string => {
  switch (Number(error.response?.status)) {
    case API_STATUS.UNAUTHORIZED:
      return (error.response?.data as UnauthorizedError).detail;
    case API_STATUS.VALIDATION_ERROR:
      return (error.response?.data as ValidationError).detail
        .map((err) => err.msg)
        .join(',\n');
    default:
      return 'Произошла ошибка';
  }
};
