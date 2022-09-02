import { lazy } from 'react';
import { IRoute } from './routes.interface';
import { PRIVATE_ROUTES } from './constants';

export const privateRoutes: IRoute[] = [
  {
    path: PRIVATE_ROUTES.MAIN,
    name: 'Сократить ссылку',
    component: lazy(() => import('src/pages/ShortLinks/ShortLinks')),
  },
];
