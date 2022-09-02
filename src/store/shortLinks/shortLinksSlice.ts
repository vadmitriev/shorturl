import { IShortLink } from 'src/interfaces/shortLink.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShortLinkState {
  links: IShortLink[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  limit: number;
}

const initialState: ShortLinkState = {
  links: [],
  isLoading: false,
  error: null,
  currentPage: 0,
  limit: 10,
};

const shortLinksSlice = createSlice({
  name: 'shortLinks',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default shortLinksSlice.reducer;
