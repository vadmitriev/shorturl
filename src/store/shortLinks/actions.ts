import { errorToText } from './../helpers/errors';
import { RootState } from 'src/store';
import { IShortLink } from 'src/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ShortLinksService from 'src/api/ShortLinksService';
import { AxiosError } from 'axios';

export const addLink = createAsyncThunk(
  'shortLinks/addLink',
  async (link: string, { rejectWithValue }) => {
    try {
      const { data } = await ShortLinksService.makeShort(link);
      return data;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        const text = errorToText(e);
        return rejectWithValue(text);
      }
      return rejectWithValue('Произошла ошибка');
    }
  },
);

export const getLinks = createAsyncThunk<
  IShortLink[],
  void,
  { state: RootState }
>('shortLinks/getLinks', async (_, thunkAPI) => {
  try {
    const { itemsPerPage, currentPage, order, orderBy } =
      thunkAPI.getState().shortLinks;

    const offset = (currentPage - 1) * itemsPerPage;
    const { data } = await ShortLinksService.getStatistic(
      offset,
      itemsPerPage,
      order,
      orderBy,
    );
    return data;
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      const text = errorToText(e);
      return thunkAPI.rejectWithValue(text);
    }
    return thunkAPI.rejectWithValue('Произошла ошибка');
  }
});
