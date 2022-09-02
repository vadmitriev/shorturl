import { RootState } from 'src/store';
import { IShortLink } from 'src/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ShortLinksService from 'src/api/ShortLinksService';

export const squezze = createAsyncThunk(
  'shortLinks/sqezze',
  async (link: string, { rejectWithValue }) => {
    try {
      const { data } = await ShortLinksService.squeeze(link);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  },
);

export const getStatistic = createAsyncThunk<
  IShortLink[],
  void,
  { state: RootState }
>('shortLinks/getStatistic', async (_, thunkAPI) => {
  try {
    const { limit, currentPage } = thunkAPI.getState().shortLinks;
    const offset = currentPage + limit;
    const { data } = await ShortLinksService.getStatistic(offset, limit);
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue('Произошла ошибка');
  }
});
