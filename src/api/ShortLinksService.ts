import { AxiosResponse } from 'axios';
import api from './http';
import { IShortLink } from 'src/interfaces';

export default class ShortLinksService {
  static async squeeze(link: string): Promise<AxiosResponse<IShortLink>> {
    return api.post('/squeeze', { link });
  }

  static async getStatistic(
    offset: number,
    limit: number,
  ): Promise<AxiosResponse<IShortLink[]>> {
    const params = {
      offset,
      limit,
    };
    return api.get('/', { params });
  }
}
