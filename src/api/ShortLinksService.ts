import { AxiosResponse } from 'axios';
import api from './http';
import { IShortLink } from 'src/interfaces';
import { Order } from 'src/constants';

export default class ShortLinksService {
  static async makeShort(link: string): Promise<AxiosResponse<IShortLink>> {
    return api.post(
      '/squeeze',
      {},
      {
        params: {
          link,
        },
      },
    );
  }

  static async getStatistic(
    offset: number,
    limit: number,
    order: Order | null,
    orderBy: string | null,
  ): Promise<AxiosResponse<IShortLink[]>> {
    return api.get('/statistics', {
      params: {
        offset: offset ?? null,
        limit: limit ?? null,
        order: order && limit ? `${order}_${orderBy}` : null,
      },
    });
  }
}
