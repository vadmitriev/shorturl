import { IShortLink } from 'src/interfaces/shortLink.interface';

export const makeShortLink = (link: IShortLink): IShortLink => {
  link.short = `${process.env.REACT_APP_URL}/s/${link.short}`;
  return link;
};
