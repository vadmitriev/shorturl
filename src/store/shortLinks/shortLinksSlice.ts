import { makeShort, getLinks } from './actions';
import { IShortLink } from 'src/interfaces/shortLink.interface';
import {
  createSlice,
  isFulfilled,
  isRejected,
  PayloadAction,
  AnyAction,
  isPending,
} from '@reduxjs/toolkit';

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
  currentPage: 1,
  limit: 10,
};

const shortLinksSlice = createSlice({
  name: 'shortLinks',
  initialState,
  reducers: {
    changeLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        makeShort.fulfilled,
        (state, action: PayloadAction<IShortLink>) => {
          state.links.push(action.payload);
        },
      )
      .addCase(getLinks.fulfilled, (state, action) => {
        console.log('links', action.payload);
      })
      .addMatcher(isPending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isRejected, (state, action: AnyAction) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addMatcher(isFulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const { changeLimit } = shortLinksSlice.actions;

export default shortLinksSlice.reducer;
