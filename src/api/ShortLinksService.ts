import { AxiosResponse } from 'axios';
import api from './http';
import { IShortLink } from 'src/interfaces';

export default class ShortLinksService {
  static async makeShort(link: string): Promise<AxiosResponse<IShortLink>> {
    return api.post(`/squeeze?link=${link}`);
  }

  static async getStatistic(
    offset: number,
    limit: number,
  ): Promise<AxiosResponse<IShortLink[]>> {
    return api.get(`/statistics?offset=${offset}&limit=${limit}`);
  }
}
